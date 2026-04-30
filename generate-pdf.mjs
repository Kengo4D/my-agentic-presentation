// generate-pdf.mjs

/**
 * Fully automated PDF generation pipeline for Nuxt-based slide deck.
 *
 * Key design decisions:
 * - Uses Playwright to simulate real user navigation (ArrowRight key)
 * - Avoids modifying application state or routing
 * - Uses print media for accurate PDF rendering
 * - Applies scale adjustment to prevent content clipping on dense slides
 *
 * Output:
 * - Single merged PDF with correct slide order
 */

import { chromium } from 'playwright';
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

// Total number of slides (must match slides.json)
const TOTAL_SLIDES = 10;

// Fine-tune this if any slide still clips
const PDF_SCALE = 0.9;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  /**
   * Set viewport to match design resolution.
   * This ensures layout consistency before print rendering.
   */
  await page.setViewportSize({ width: 1920, height: 1080 });

  /**
   * Load local Nuxt server.
   * Use `pnpm preview` for production-like rendering.
   */
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle'
  });

  /**
   * IMPORTANT:
   * Use print media to match PDF rendering engine behavior.
   * Using 'screen' here can cause layout overflow and clipping.
   */
  await page.emulateMedia({ media: 'print' });

  const mergedPdf = await PDFDocument.create();

  console.log('🚀 Starting PDF generation...');

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    console.log(`📸 Capturing slide ${i + 1} / ${TOTAL_SLIDES}`);

    /**
     * Wait for animations and layout stabilization.
     * Necessary for SPA transitions.
     */
    await page.waitForTimeout(600);

    /**
     * Capture current slide as PDF buffer.
     * scale is critical to prevent vertical overflow.
     */
    const pdfBytes = await page.pdf({
      format: 'A4',
      landscape: true,
      printBackground: true,
      scale: PDF_SCALE,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });

    /**
     * Merge into final document.
     */
    const pdf = await PDFDocument.load(pdfBytes);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(p => mergedPdf.addPage(p));

    /**
     * Move to next slide using keyboard navigation.
     * This matches actual user interaction logic.
     */
    if (i < TOTAL_SLIDES - 1) {
      await page.keyboard.press('ArrowRight');
    }
  }

  /**
   * Save final merged PDF.
   */
  const finalPdf = await mergedPdf.save();
  const outputFileName = 'Toshiba_TDSC_Japan_2026_Strategic_Infrastructure_Report.pdf';

  fs.writeFileSync(outputFileName, finalPdf);

  await browser.close();

  console.log(`\n✅ PDF successfully generated: ${outputFileName}`);
})();