import { chromium } from '@playwright/test';
import serve from '@ladle/react/serve';

const pdfPath = process.argv[2] || 'exercises.pdf'

const generatePDF = async() => {
  // start up ladle
  await serve();

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:61000/assessment-components/?mode=preview&story=print--default');
  await page.waitForLoadState('networkidle')
  await page.emulateMedia({ media: 'screen' });
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: {
      top: "80px",
      left: "80px",
      right: "80px",
      bottom: "80px",
    },
    scale: 0.8,
    printBackground: true,
  });

  await browser.close();
  process.exit(0);
}

generatePDF()
  .catch((e) => {
    console.error('an error has prevented the pdf from saving', e);
    process.exit(1);
  });
