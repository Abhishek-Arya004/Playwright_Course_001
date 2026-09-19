import { test, expect } from "@playwright/test";

// test("Verify button click actions", async ({ page }) => {
//   await page.goto("https://demoqa.com/buttons");

//   // Double click
//   await page
//     .getByRole("button", {
//       name: "Double Click Me",
//       exact: true,
//     })

//     .dblclick();

//   await expect(page.getByText("You have done a double click")).toBeVisible();

//   // Right click
//   await page
//     .getByRole("button", {
//       name: "Right Click Me",
//       exact: true,
//     })
//     .click({
//       button: "right",
//     });

//   await expect(page.getByText("You have done a right click")).toBeVisible();

//   // Normal click
//   await page
//     .getByRole("button", {
//       name: "Click Me",
//       exact: true,
//     })
//     .click();

//   await expect(page.getByText("You have done a dynamic click")).toBeVisible();
// });

// test("Verify mouse hover actions", async ({ page }) => {
//   await page.goto("https://demoqa.com/tool-tips");

//   // Hover over the button
//   await page.getByRole("button", { name: "Hover me to see" }).hover();

//   // Verify the tooltip is visible
//   await expect(page.getByText("You hovered over the Button")).toBeVisible();

//   // Hover over the text field
//   await page.getByPlaceholder("Hover me to see").hover();

//   // Verify the tooltip is visible
//   //await expect(page.getByText("You hovered over the text field")).toBeVisible();
// });
test("Verify drag and drop actions", async ({ page }) => {
  await page.goto("https://demoqa.com/droppable");

  // Source: Drag Me from Simple tab
  const source = page
    .getByLabel("Simple")
    .getByText("Drag Me", { exact: true });

  const target = page.getByLabel("Simple").locator("#droppable");

  await source.dragTo(target);

  // Verify
  await expect(target).toHaveText("Dropped!");
});
// test("Verify slider actions", async ({ page }) => {
//   await page.goto("https://demoqa.com/slider");

//   // Move the slider to a specific value
//   const slider = page.locator(".range-slider");
//   await slider.evaluate((element) => {
//     element.value = 75; // Set the desired value
//     element.dispatchEvent(new Event("input", { bubbles: true }));
//   });

//   // Verify the slider value
//   const sliderValue = await page.locator("#sliderValue").textContent();
//   expect(sliderValue).toBe("75");
// });
// test("Verify selectable actions", async ({ page }) => {
//   await page.goto("https://demoqa.com/selectable");

//   // Select the first item
//   const firstItem = page.getByText("Cras justo odio");
//   await firstItem.click();

//   // Verify the item is selected
//   await expect(firstItem).toHaveClass(/active/);
// });
// test("Verify resizable actions", async ({ page }) => {
//   await page.goto("https://demoqa.com/resizable");

//   // Resize the element
//   const resizableElement = page.locator(".resizable");
//   const resizeHandle = resizableElement.locator(".react-resizable-handle-se");

//   // Perform the resize action
//   await resizeHandle.dragTo(resizeHandle, {
//     targetPosition: { x: 100, y: 100 },
//   });

//   // Verify the new size of the element
//   const newSize = await resizableElement.evaluate((element) => {
//     return {
//       width: element.offsetWidth,
//       height: element.offsetHeight,
//     };
//   });

//   expect(newSize.width).toBeGreaterThan(100);
//   expect(newSize.height).toBeGreaterThan(100);
// });
// test("scroll to element and verify visibility", async ({ page }) => {
//   await page.goto("https://demoqa.com/automation-practice-form");

//   // Scroll to the element
//   const elementToScrollTo = page.getByText("State and City");
//   await elementToScrollTo.scrollIntoViewIfNeeded();

//   // Verify the element is visible
//   await expect(elementToScrollTo).toBeVisible();
// });
