// example.js
const { chromium } = require('playwright');

(async () => {
  // 2. Launch browser
  const browser = await chromium.launch({ headless: true });

  // 3. Create a context and a new page
  const context = await browser.newContext();
  const page = await context.newPage();

  // 4. Browse to example.com
  await page.goto('https://google.com');

  // 5. Take a screenshot
  screenshot_path = 'example.png';
  await page.screenshot({ path: screenshot_path, fullPage: true });
  console.log('📸 Screenshot saved to ' + screenshot_path);

  // 6. Extract and show title
  const title = await page.title();
  console.log('Page title:', title);

  // 7. Close browser
  await browser.close();
})();
