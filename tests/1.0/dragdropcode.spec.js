import { test, expect } from "@playwright/test";

test("Verify drag and drop actions", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  const source = page
    .getByLabel("Simple")
    .getByText("Drag Me", { exact: true });
  const target = page.getByLabel("Simple").locator("#droppable");

  // Get source and target coordinates
  const sourceBox = await source.boundingBox();
  const targetBox = await target.boundingBox();

  if (!sourceBox || !targetBox) {
    throw new Error("Source or target element not found");
  }

  // Source center
  const sourceX = sourceBox.x + sourceBox.width / 2;
  const sourceY = sourceBox.y + sourceBox.height / 2;

  console.log("Source coordinates:", sourceX, sourceY);

  // Target center
  const targetX = targetBox.x + targetBox.width / 2;
  const targetY = targetBox.y + targetBox.height / 2;

  console.log("Target coordinates:", targetX, targetY);

  // Move to source
  await page.mouse.move(sourceX, sourceY);

  // Press mouse
  await page.mouse.down();

  // Drag gradually to target
  await page.mouse.move(targetX, targetY, {
    steps: 10,
  });

  // Release mouse
  await page.mouse.up();

  // Verify
  await expect(target).toHaveText("Dropped!");
});
