import { test, expect } from "@playwright/test";

// test("Keyboard actions Tab", async ({ page }) => {
//   await page.goto("https://demoqa.com/text-box");

//   const name = page.getByPlaceholder("Full Name");

//   await name.fill("Abhishek");

//   await name.press("Tab");

//   await page.getByRole("textbox", { name: "name@example.com" }).press("Tab");
//   await page.getByRole("textbox", { name: "Current Address" }).press("Tab");
//   await page.locator("#permanentAddress").press("Tab");
//   await page.getByRole("button", { name: "Submit" }).press("Enter");

//   await page.waitForTimeout(10000);
// });

// test("Keyboard actions Arrows", async ({ page }) => {
//   await page.goto("https://demoqa.com/text-box");

//   const name = page.getByPlaceholder("Full Name");

//   await name.fill("Abhishek");

//   await name.press("ArrowLeft");

//   await name.press("ArrowLeft");

//   await name.press("ArrowLeft");

//   await page.waitForTimeout(10000);
// });

test("Keyboard actions Arrows", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");

  const name = page.getByPlaceholder("Full Name");

  await name.fill("Abhishek");

  await page.keyboard.press("Meta+A");
  await page.keyboard.press("Meta+C");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Meta+V");
  await page.keyboard.press("Tab");
  await page.keyboard.type("this is playwirtght automation testing");

  await page.waitForTimeout(10000);
});
