import puppeteer from 'puppeteer';
// import argv from 'yargs';
// import path from 'path';
import serve from "@ladle/react/serve";

const generatePDF = async() => {
  await serve();

  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  await page.goto('http://localhost:61000/?mode=preview&story=print--default');    

  await page.pdf({
    path: './pdfs/test.pdf',
    format: 'letter',
    margin: {
          top: "80px",
          left: "80px",
          right: "80px",
          bottom: "80px"
    },
    printBackground: true,
  });    
  
  await browser.close(); 

}

generatePDF();
