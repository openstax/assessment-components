import puppeteer from 'puppeteer';
import serve from "@ladle/react/serve";
// import argv from 'yargs';

const generatePDF = async() => {
  await serve();

  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto('http://localhost:61001/?mode=preview&story=print--default', {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: './pdfs/test.pdf',
    format: 'letter',
    margin: {
      top: "80px",
      left: "80px",
      right: "80px",
      bottom: "80px",
    },
    printBackground: true,
  });
  
  await browser.close();
}

generatePDF();
