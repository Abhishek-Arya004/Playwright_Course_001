import { test, expect } from "@playwright/test";

// test("Click on alert button", async ({ page }) => {
//   await page.goto("https://demoqa.com/alerts");

//   await page.locator("#alertButton").click();

//   await page.on("dialog", (dialog) => dialog.accept());

//   await page.waitForTimeout(5000);
// });

// test("click timer alert", async ({ page }) => {
//   await page.goto("https://demoqa.com/alerts");

//   await page.locator("#timerAlertButton").click();

//   await page.on("dialog", (dialog) => dialog.accept());

//   await page.waitForTimeout(5000);
// });

// test("click confirm alert", async ({ page }) => {
//   await page.goto("https://demoqa.com/alerts");

//   await page.locator("#confirmButton").click();

//   await page.on("dialog", (dialog) => dialog.dismiss());

//   await page.waitForTimeout(5000);
// });

test("click prompt alert", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  page.once("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await page.waitForTimeout(5000);
    await dialog.accept("Abhishek Kumar Arya");
  });

  await page.locator("#promtButton").click();
});
