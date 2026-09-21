import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.getByRole("link", { name: "Admin" }).click();
  await page.getByRole("textbox").nth(1).click();
  await page.getByRole("textbox").nth(1).fill("sibani");
  await page
    .locator("div")
    .filter({ hasText: /^-- Select --$/ })
    .nth(2)
    .click();
  await page.getByRole("listbox").getByText("Admin").click();
  await page.getByRole("textbox", { name: "Type for hints..." }).click();
  await page.getByRole("textbox", { name: "Type for hints..." }).click();
  await page.getByRole("textbox", { name: "Type for hints..." }).fill("sibani");
  await page.getByText("-- Select --").click();
  await page.getByRole("listbox").getByText("Enabled").click();
  await page.getByRole("button", { name: "Search" }).click();
});
