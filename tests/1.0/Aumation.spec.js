import { test, expect } from "@playwright/test";

test("Fill Data Entry Form", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await expect(page).toHaveTitle("Automation Testing Practice");

  await page.locator("#name").fill("Abhishek Kumar");

  await expect(page.locator("#name")).toHaveValue("Abhishek Kumar");

  await page.locator("#email").fill("abhishek@test.com");

  await expect(page.locator("#email")).toHaveValue("abhishek@test.com");

  await page.locator("#phone").fill("9876543210");
  await expect(page.locator("#phone")).toHaveValue("9876543210");

  await page.locator("#textarea").fill("Ghaziabad, India");
  await expect(page.locator("#textarea")).toHaveValue("Ghaziabad, India");

  await page.locator("#male").check();
  await expect(page.locator("#male")).toBeChecked();

  await page.locator("#monday").check();
  await expect(page.locator("#monday")).toBeChecked();

  await page.locator("#friday").check();
  await expect(page.locator("#friday")).toBeChecked();

  await page.locator("#country").selectOption("india");
  await expect(page.locator("#country")).toHaveValue("india");

  await page.locator("#colors").selectOption(["red", "blue"]);
  //await expect(page.locator("#colors")).toHaveValue(["red", "blue"]);

  await page.locator("#animals").selectOption(["dog", "lion"]);
  //await expect(page.locator("#animals")).toHaveValue(["dog", "lion"]);

  await page.locator("#datepicker").fill("07/25/2026");
  await expect(page.locator("#datepicker")).toHaveValue("07/25/2026");
  await page.locator("#start-date").fill("2026-07-25");
  await expect(page.locator("#start-date")).toHaveValue("2026-07-25");
  await page.locator("#end-date").fill("2026-07-30");
  await expect(page.locator("#end-date")).toHaveValue("2026-07-30");

  await expect(
    page.locator(".date-picker-box").getByRole("button", {
      name: "Submit",
    }),
  ).toBeVisible();

  await page
    .locator(".date-picker-box")
    .getByRole("button", {
      name: "Submit",
    })
    .click();

  await page.waitForTimeout(5000);

  //await page.getByRole("button", { name: "Submit" }).click();

  //console.log(await submitButtons.count());
});
