import { test, expect } from "@playwright/test";

test.describe("Playwright Keyboard Actions", () => {
  test("01 - Type text and use Enter", async ({ page }) => {
    await page.goto("https://www.google.com");

    const searchBox = page.getByRole("combobox", {
      name: "Search",
    });

    await searchBox.fill("Playwright automation");

    // Press Enter
    await searchBox.press("Enter");

    await expect(page).toHaveTitle(/Playwright|Google/i);

    await page.waitForTimeout(5000);
  });

  test("02 - Tab navigation", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Abhishek");

    // Move focus to next element
    await name.press("Tab");

    // Type into the currently focused element
    await page.keyboard.type("abhishek@test.com");

    await page.waitForTimeout(5000);
  });

  test("03 - Escape key", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/");

    // Escape is normally used to close
    // dropdowns, dialogs, menus, etc.

    await page.keyboard.press("Escape");

    await page.waitForTimeout(5000);
  });

  test("04 - Space key", async ({ page }) => {
    await page.goto("https://demoqa.com/checkbox");

    const checkbox = page.getByRole("checkbox").first();

    // Focus checkbox
    await checkbox.focus();

    // Space toggles checkbox
    await checkbox.press("Space");

    await expect(checkbox).toBeChecked();
  });

  test("05 - Backspace", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Abhishek");

    // Delete last character
    await name.press("Backspace");

    await expect(name).toHaveValue("Abhishe");
  });

  test("06 - Delete key", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Abhishek");

    // Move cursor to beginning
    await name.press("Home");

    // Delete first character
    await name.press("Delete");

    await expect(name).toHaveValue("bhishek");
  });

  test("07 - Arrow keys", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Playwright");

    // Move cursor
    await name.press("ArrowLeft");
    await name.press("ArrowLeft");
    await name.press("ArrowLeft");

    // Insert text at cursor
    await page.keyboard.type("TEST");

    await expect(name).toHaveValue("PlaywTESTright");
  });

  test("08 - Home and End keys", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Playwright Automation");

    // Move cursor to beginning
    await name.press("Home");

    await page.keyboard.type("My ");

    // Move cursor to end
    await name.press("End");

    await page.keyboard.type(" Test");

    await expect(name).toHaveValue("My Playwright Automation Test");
  });

  test("09 - PageUp and PageDown", async ({ page }) => {
    await page.goto("https://demoqa.com/");

    // Scroll down
    await page.keyboard.press("PageDown");

    // Scroll up
    await page.keyboard.press("PageUp");
  });

  test("10 - Select all and replace text", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Old Name");

    // Select everything
    await name.press("Control+A");

    // Replace selected text
    await page.keyboard.type("New Name");

    await expect(name).toHaveValue("New Name");
  });

  test("11 - Copy and Paste", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Abhishek");

    // Select all
    await name.press("Control+A");

    // Copy
    await name.press("Control+C");

    // Move focus somewhere else
    await name.press("Tab");

    // Paste
    await page.keyboard.press("Control+V");
  });

  test("12 - Keyboard shortcut", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Playwright");

    // Select all
    await name.press("Control+A");

    // Replace selected text
    await page.keyboard.type("Automation");

    await expect(name).toHaveValue("Automation");
  });

  test("13 - Keyboard navigation through form", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Abhishek");

    // Navigate using TAB
    await name.press("Tab");

    await page.keyboard.type("abhishek@test.com");

    await page.keyboard.press("Tab");

    await page.keyboard.type("Lucknow");

    await page.keyboard.press("Tab");

    await page.keyboard.type("QA Automation");
  });

  test("14 - Keyboard handling of dropdown", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");

    const dropdown = page.locator("#dropdown");

    await dropdown.focus();

    // Open dropdown
    await dropdown.press("ArrowDown");

    // Move to next option
    await dropdown.press("ArrowDown");

    // Select
    await dropdown.press("Enter");
  });

  test("15 - Keyboard handling of slider", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const slider = page.locator("#slider-range");

    const minHandle = slider.locator(".ui-slider-handle").nth(0);

    const maxHandle = slider.locator(".ui-slider-handle").nth(1);

    // Focus first slider handle
    await minHandle.focus();

    // Move slider right
    await minHandle.press("ArrowRight");
    await minHandle.press("ArrowRight");
    await minHandle.press("ArrowRight");

    // Focus second handle
    await maxHandle.focus();

    // Move slider left
    await maxHandle.press("ArrowLeft");
    await maxHandle.press("ArrowLeft");
  });

  test("16 - Checkbox using keyboard", async ({ page }) => {
    await page.goto("https://demoqa.com/checkbox");

    const checkbox = page.getByRole("checkbox").first();

    await checkbox.focus();

    // Space = select checkbox
    await page.keyboard.press("Space");

    await expect(checkbox).toBeChecked();
  });

  test("17 - Keyboard interaction with iframe", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/iframe");

    const frame = page.frameLocator("#mce_0_ifr");

    const editor = frame.locator("body");

    await editor.click();

    await page.keyboard.press("Control+A");

    await page.keyboard.type(
      "This text was entered using Playwright keyboard actions.",
    );
  });

  test("18 - Escape + Enter + Arrow keys together", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");

    const dropdown = page.locator("#dropdown");

    await dropdown.focus();

    // Open
    await dropdown.press("Enter");

    // Navigate
    await dropdown.press("ArrowDown");
    await dropdown.press("ArrowDown");

    // Select
    await dropdown.press("Enter");

    // Escape
    await page.keyboard.press("Escape");
  });

  test("19 - Keyboard sequence", async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");

    const name = page.getByPlaceholder("Full Name");

    await name.fill("Playwright");

    // Beginning
    await name.press("Home");

    // Move right
    await name.press("ArrowRight");
    await name.press("ArrowRight");

    // Delete character
    await name.press("Delete");

    // End
    await name.press("End");

    // Add text
    await page.keyboard.type(" Test");

    // Select all
    await name.press("Control+A");

    // Replace
    await page.keyboard.type("Final Value");

    await expect(name).toHaveValue("Final Value");
  });

  test("20 - Keyboard accessibility test", async ({ page }) => {
    await page.goto("https://demoqa.com/buttons");

    // Find button
    const button = page.getByRole("button", {
      name: "Click Me",
      exact: true,
    });

    // Focus using keyboard
    await button.focus();

    // Activate using Enter
    await page.keyboard.press("Enter");

    await expect(page.getByText("You have done a dynamic click")).toBeVisible();
  });
});
