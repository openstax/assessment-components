import puppeteer from 'puppeteer';
import serve from '@ladle/react/serve';

const pdfPath = process.argv[2]

const generatePDF = async() => {

  

  // start up ladle
  await serve();

  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto('http://localhost:61001/?mode=preview&story=print--default', {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: {
      top: "80px",
      left: "80px",
      right: "80px",
      bottom: "80px",
    },
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
