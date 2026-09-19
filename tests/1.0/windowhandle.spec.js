import { test, expect } from "@playwright/test";

test("Handle new tab", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/windows");

  const newTabPromise = page.waitForEvent("popup");

  await page.getByText("Click Here").click();

  const newTab = await newTabPromise;

  await newTab.waitForLoadState();

  console.log("New tab URL:", newTab.url());

  console.log("New tab title:", await newTab.title());
});
