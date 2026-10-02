// Generates responsive AVIF and WebP hero assets from a source JPEG using the
// sharp build that ships with Next.js. Run from the repo root:
//   node scripts/optimise-hero.mjs public/CITY.jpg public/images/hero-gold-coast
import sharp from 'sharp'
import { stat } from 'node:fs/promises'

const [, , input = 'public/CITY.jpg', outBase = 'public/images/hero-gold-coast'] =
  process.argv

const widths = [960, 1440, 1920]
const meta = await sharp(input).metadata()
console.log(`source ${input}: ${meta.width}x${meta.height}, ${meta.format}`)

for (const width of widths) {
  const base = sharp(input).resize({ width, withoutEnlargement: true })
  const avifPath = `${outBase}-${width}.avif`
  const webpPath = `${outBase}-${width}.webp`
  await base.clone().avif({ quality: 48, effort: 6 }).toFile(avifPath)
  await base.clone().webp({ quality: 74, effort: 6 }).toFile(webpPath)
  const [a, w] = await Promise.all([stat(avifPath), stat(webpPath)])
  console.log(`${width}px: avif ${Math.round(a.size / 1024)} KB, webp ${Math.round(w.size / 1024)} KB`)
}
