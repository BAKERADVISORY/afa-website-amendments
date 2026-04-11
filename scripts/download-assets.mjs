import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';

const BASE_DIR = new URL('../public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');

const assets = [
  // Logos & SVGs
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2022/07/we-logo3.svg', dest: 'images/logo-light.svg' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2022/07/white-1.svg', dest: 'images/logo-shape-white.svg' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2022/07/we-logo2.svg', dest: 'images/watermark-bg.svg' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2022/07/we-logo5.svg', dest: 'images/logo-white.svg' },
  // Hero
  { url: 'https://wynnadvisory.com.au/wp-content/uploads/2026/03/w.jpg', dest: 'images/hero-photo.jpg' },
  // Why Choose images
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/02/1755667730581-small-business-restructuring.webp', dest: 'images/business-meeting.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/02/1755657176403-What_Is_a_Garnishee_Order_-_ATO.webp', dest: 'images/garnishee-order.webp' },
  // Partner logos
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2023/08/Facebook_Logo_2019.svg.png', dest: 'images/partners/facebook.png' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2023/08/3.jpeg', dest: 'images/partners/myob.jpeg' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2023/08/CA-Logo.jpg', dest: 'images/partners/ca-logo.jpg' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2023/08/Certified-Consultant_RGB.jpg', dest: 'images/partners/certified-consultant.jpg' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2023/08/cpa_logo.jpg', dest: 'images/partners/cpa.jpg' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2025/01/xero.png', dest: 'images/partners/xero.png' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2025/01/qb.png', dest: 'images/partners/qb.png' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2025/01/tpa-logo.png', dest: 'images/partners/tpa-logo.png' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2025/01/zohologo.png', dest: 'images/partners/zohologo.png' },
  // Blog post images
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/Reduce-company-debt-NSW.webp', dest: 'images/blog/reduce-company-debt-nsw.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/Closing-a-business-with-debt-Australia.webp', dest: 'images/blog/closing-business-with-debt.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/How-to-restructure-a-small-business-Australia.webp', dest: 'images/blog/how-to-restructure.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/How-to-fix-business-cash-flow-problems-Australia.webp', dest: 'images/blog/fix-cash-flow.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/Company-bankruptcy-vs-liquidation-Australia.webp', dest: 'images/blog/bankruptcy-vs-liquidation.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/How-to-manage-company-debt-australia.webp', dest: 'images/blog/manage-company-debt.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/Business-rescue-strategies-Australia.webp', dest: 'images/blog/business-rescue-strategies.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/Help-with-business-financial-distress-Australia.webp', dest: 'images/blog/financial-distress.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/Pre-insolvency-advice-Australia.webp', dest: 'images/blog/pre-insolvency-advice.webp' },
  { url: 'https://www.wynnadvisory.com.au/wp-content/uploads/2026/03/Creditors-voluntary-liquidation-Australia.webp', dest: 'images/blog/creditors-voluntary-liquidation.webp' },
];

async function downloadOne(url, dest) {
  const fullDest = path.join(BASE_DIR, dest);
  mkdirSync(path.dirname(fullDest), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) { console.warn(`SKIP ${url} (${res.status})`); return; }
  await pipeline(res.body, createWriteStream(fullDest));
  console.log(`OK   ${dest}`);
}

async function downloadBatch(items, concurrency = 4) {
  for (let i = 0; i < items.length; i += concurrency) {
    await Promise.allSettled(items.slice(i, i + concurrency).map(a => downloadOne(a.url, a.dest)));
  }
}

console.log('Downloading assets...');
await downloadBatch(assets);
console.log('Done.');
