import { test, expect } from "@playwright/test";

test("Verify drag and drop actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Source: Drag Me from Simple tab
  const source = page.getByText("Drag me to my target", { exact: true });

  const target = page.locator("#droppable");

  await source.hover();

  await source.dragTo(target);

  await target.hover();
  // Verify
  await expect(target).toHaveText("Dropped!");
});
