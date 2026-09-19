import { test, expect } from "@playwright/test";

test("Verify drag and drop actions", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  const source = page
    .getByLabel("Simple")
    .getByText("Drag Me", { exact: true });
  const target = page.getByLabel("Simple").locator("#droppable");

  const sourceBox = await source.boundingBox();
  const targetBox = await target.boundingBox();

  if (!sourceBox || !targetBox) {
    throw new Error("Could not get source or target coordinates");
  }

  const sourceX = sourceBox.x + sourceBox.width / 2;

  const sourceY = sourceBox.y + sourceBox.height / 2;

  const targetX = targetBox.x + targetBox.width / 2;

  const targetY = targetBox.y + targetBox.height / 2;

  // Move to source
  await page.mouse.move(sourceX, sourceY);

  // Press and hold
  await page.mouse.down();

  // Multiple movements are important
  await page.mouse.move(sourceX + 20, sourceY, {
    steps: 5,
  });

  await page.mouse.move(targetX - 50, targetY, {
    steps: 10,
  });

  await page.mouse.move(targetX, targetY, {
    steps: 10,
  });

  // Release
  await page.mouse.up();

  // Verify
  await expect(target).toHaveText("Dropped!");
});
