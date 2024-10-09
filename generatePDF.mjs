import puppeteer from 'puppeteer';
import { launch } from 'puppeteer';

(async () => {
  try {
    // let browser
    // if (process.env.DEV) {
    //   // make sure ghcr.io/browserless/chromium is running on port 3000
    //   browser = await puppeteer.connect({
    //     browserWSEndpoint: 'ws://localhost:3000'
    //   });
    // } else {
    //   browser = await launch();
    // }

    // connects to browserless container
    const browser = await puppeteer.connect({
      browserWSEndpoint: 'ws://localhost:3000'
    });

    const page = await browser.newPage();

    const fileUrl = 'http://localhost:3000/resume/index.html';
    await page.goto(fileUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });

    // create a PDF of the page
    await page.pdf({
      path: 'resume.pdf', // path to save the PDF
      format: 'letter',       // paper size
      printBackground: false,
    });

    // close the browser
    await browser.close();

    console.log('PDF generated!');
  } catch (e) {
    console.error(e)
  }

})();

