import { test, expect } from "@playwright/test";

test("verify URL is accessible", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  await page.waitForTimeout(5000);

  ///await page.response.status();
});

test("this second test case", async ({ page }) => {
  await page.goto("https://linkedin.com");
  await page.waitForTimeout(5000);
});

// test("this third test case", async ({ page }) => {
//   await page.goto("https://google.com");
//   await page.waitForTimeout(5000);
// });

// test("this fourth test case", async ({ page }) => {
//   await page.goto("https://guru99.com");
//   await page.waitForTimeout(5000);
// });

// test("this fifth test case", async ({ page }) => {
//   await page.goto("https://facebook.com");
//   await page.waitForTimeout(5000);
// });
// Locator Priority:

//getByRole > getByLabel > getByPlaceholder > getByText > getByAltText > getByTitle > getByTestId > CSS Selector > XPath
//playwright commands
//Run all tests: npx playwright test
//Run specific test file: npx playwright test Samplecode.spec.js
//Run in headed mode: npx playwright test file.spec.js --headed
//show report: npx playwright show-report
//on specific browser: npx playwright test --project=chromium
//playwrite methods: click, fill, check, selectOption, 
// getByRole, getByLabel, getByPlaceholder, getByText, getByAltText, getByTitle, getByTestId
