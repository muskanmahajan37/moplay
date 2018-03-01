const fs = require('fs');
const puppeteer = require('puppeteer');

const logs = JSON.parse(fs.readFileSync('test/log.json'));

const log = logs[0];

puppeteer.launch({
  headless: false,
  slowMo: 500
}).then(async browser => {
  const page = await browser.newPage();
  await page.goto(log.url);
  await page.waitFor('header');
  await browser.close();
});
