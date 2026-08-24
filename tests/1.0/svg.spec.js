import { test, expect } from "@playwright/test";

test("Click on alert button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const cx = await page
    .locator("#HTML14 > div.widget-content > div > svg:nth-child(1) > circle")
    .getAttribute("cx");
  console.log(`Circle X position: ${cx}`);
});
