// generate-pdf.mjs
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Connect to your local Nuxt dev server
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Emulate screen media to ensure CSS styles are correct
  await page.emulateMedia({ media: 'screen' });

  await page.pdf({ 
    path: 'strategic-report-2026.pdf', 
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('PDF Generated: strategic-report-2026.pdf');
})();