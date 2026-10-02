// Post-build verification of the static export in out/.
// Run after `npm run build`: node scripts/verify-out.mjs
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const OUT = 'out'
const SITE = 'https://www.australianfinancialadvisory.com.au'
const failures = []
const notes = []

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === '_next') continue
      walk(full, acc)
    } else if (entry.endsWith('.html')) acc.push(full)
  }
  return acc
}

const htmlFiles = walk(OUT).filter((f) => !f.includes('_not-found') && !f.endsWith('404.html'))
const pages = htmlFiles.map((file) => {
  const rel = relative(OUT, file).replace(/\\/g, '/')
  const route = rel === 'index.html' ? '/' : `/${rel.replace(/\.html$/, '')}`
  return { file, route, html: readFileSync(file, 'utf8') }
})

notes.push(`html pages checked: ${pages.length}`)

// 1. No FinancialService anywhere in the export (html + js chunks)
function walkAll(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walkAll(full, acc)
    else if (/\.(html|js|txt|xml|json)$/.test(entry)) acc.push(full)
  }
  return acc
}
const fsHits = walkAll(OUT).filter((f) => readFileSync(f, 'utf8').includes('FinancialService'))
if (fsHits.length) failures.push(`FinancialService present in: ${fsHits.join(', ')}`)
else notes.push('FinancialService strings: 0')

// 2. Canonical matches served route form (no trailing slash except home)
for (const p of pages) {
  const m = p.html.match(/<link rel="canonical" href="([^"]+)"/)
  if (!m) {
    failures.push(`${p.route}: no canonical`)
    continue
  }
  // Next normalises the home canonical to the bare origin; both forms identify "/".
  const expected = p.route === '/' ? [SITE, `${SITE}/`] : [`${SITE}${p.route}`]
  if (!expected.includes(m[1])) failures.push(`${p.route}: canonical ${m[1]} != ${expected[0]}`)
}
notes.push('canonical form checked on every page')

// 3. Sitemap URLs each map to a built html file
const sitemap = readFileSync(join(OUT, 'sitemap.xml'), 'utf8')
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
for (const loc of locs) {
  const path = loc.replace(SITE, '')
  if (path.endsWith('/') && path !== '/') failures.push(`sitemap trailing slash: ${loc}`)
  const file = path === '/' ? join(OUT, 'index.html') : join(OUT, `${path}.html`)
  if (!existsSync(file)) failures.push(`sitemap url has no file: ${loc}`)
}
if (/<changefreq>|<priority>/.test(sitemap)) failures.push('sitemap still has changefreq/priority')
notes.push(`sitemap urls: ${locs.length}, all resolve to built files`)

// 4. #contact target exists on every page that links to it
for (const p of pages) {
  if (p.html.includes('href="#contact"') && !p.html.includes('id="contact"')) {
    failures.push(`${p.route}: links #contact but has no id="contact"`)
  }
}
const contactPages = pages.filter((p) => p.html.includes('id="contact"')).length
notes.push(`pages with id="contact": ${contactPages} of ${pages.length}`)

// 5. No CITY.jpg, llms.txt present, _redirects present, robots present
if (walkAll(OUT).some((f) => readFileSync(f, 'utf8').includes('CITY.jpg'))) failures.push('CITY.jpg referenced')
for (const f of ['llms.txt', '_redirects', 'robots.txt', 'images/og-image.jpg', 'images/hero-city-1440.avif']) {
  if (!existsSync(join(OUT, f))) failures.push(`missing ${f}`)
}
notes.push('llms.txt, _redirects, robots.txt, og-image.jpg, hero-city assets present')

// 6. FAQ schema questions must appear visibly in the page body
for (const p of pages) {
  const blocks = [...p.html.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)].map((m) => m[1])
  for (const raw of blocks) {
    let data
    try {
      data = JSON.parse(raw)
    } catch {
      failures.push(`${p.route}: invalid JSON-LD`)
      continue
    }
    if (data['@type'] === 'FAQPage') {
      const body = p.html.replace(/<script type="application\/ld\+json">[^<]*<\/script>/g, '')
      for (const q of data.mainEntity) {
        const esc = (s) => s.replace(/&/g, '&amp;').replace(/'/g, '&#x27;').replace(/"/g, '&quot;')
        if (!body.includes(q.name) && !body.includes(esc(q.name))) failures.push(`${p.route}: FAQ question not visible: ${q.name}`)
        const a = q.acceptedAnswer.text
        if (!body.includes(a) && !body.includes(esc(a))) failures.push(`${p.route}: FAQ answer not visible: ${a.slice(0, 50)}`)
      }
    }
  }
}
notes.push('FAQPage schema cross-checked against visible text on every page')

// 7. Landmarks and headings
for (const p of pages) {
  if (!p.html.includes('<main id="main"')) failures.push(`${p.route}: no <main id="main">`)
  if (!p.html.includes('class="skip-link"')) failures.push(`${p.route}: no skip link`)
  const h1s = (p.html.match(/<h1[\s>]/g) || []).length
  if (h1s !== 1) failures.push(`${p.route}: ${h1s} h1 elements`)
  const t = p.html.match(/<title>([^<]*)<\/title>/)
  if (!t) failures.push(`${p.route}: no title`)
  else if (t[1].length > 65) notes.push(`${p.route}: title ${t[1].length} chars`)
  if (/outline:\s*none/.test(p.html)) failures.push(`${p.route}: outline:none present`)
}
notes.push('main#main, skip link, single h1, title present on every page')

// 8. Home: hero preload and fetchpriority
const home = pages.find((p) => p.route === '/')
if (!/rel="preload" as="image"/.test(home.html)) failures.push('home: no image preload')
if (!/fetchpriority="high"/i.test(home.html)) failures.push('home: no fetchpriority=high')
notes.push('home hero preload and fetchpriority present')

// 9. Contact page is a real page
const contact = pages.find((p) => p.route === '/contact')
if (!contact || !contact.html.includes('<form')) failures.push('contact page missing or has no form')

console.log(notes.map((n) => `  ok  ${n}`).join('\n'))
if (failures.length) {
  console.log(failures.map((f) => `  FAIL ${f}`).join('\n'))
  process.exit(1)
}
console.log('VERIFY-OUT: PASS')
