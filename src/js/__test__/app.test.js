const puppeteer = require('puppeteer');

test('should show popover', async () => {
  const browser = await puppeteer.launch();
  // headless: false,
  //  slowMo: 250,

  const page = await browser.newPage();
  await page.goto('https://milanna6084.github.io/AHJ-forms/');
  await page.click('.button');
  await page.waitForSelector('.popover');
  await browser.close();
}, 10000);
