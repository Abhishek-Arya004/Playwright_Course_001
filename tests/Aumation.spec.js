import { test, expect } from "@playwright/test";

test("Fill Data Entry Form", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#name").fill("Abhishek Kumar");

  await page.locator("#email").fill("abhishek@test.com");

  await page.locator("#phone").fill("9876543210");

  await page.locator("#textarea").fill("Ghaziabad, India");

  await page.locator("#male").check();

  await page.locator("#monday").check();

  await page.locator("#friday").check();

  await page.locator("#country").selectOption("india");

  await page.locator("#colors").selectOption(["red", "blue"]);

  await page.locator("#animals").selectOption(["dog", "lion"]);

  await page.locator("#datepicker").fill("07/25/2026");

  await page.locator("#start-date").fill("2026-07-25");

  await page.locator("#end-date").fill("2026-07-30");

  await page
    .locator(".date-picker-box")
    .getByRole("button", {
      name: "Submit",
    })
    .click();

  await page.getByRole("button", { name: "Submit" }).click();

  console.log(await submitButtons.count());
});
