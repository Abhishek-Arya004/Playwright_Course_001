import { test, expect } from "@playwright/test";

test("Click on alert button", async ({ page }) => {
  await page.goto(
    "https://the-internet.herokuapp.com/windows?utm_source=chatgpt.com",
  );

  const newTabPromise = page.waitForEvent("popup"); // wait for the new tab to open

  await page.getByText("Click Here").click();

  const newTab = await newTabPromise; // get the new tab page object

  await newTab.waitForLoadState(); // wait for the new tab to finish loading

  console.log("New tab URL:", newTab.url());

  console.log("New tab title:", await newTab.title());

  const value = await newTab.locator("body > div > h3").innerText();

  console.log("Value from new tab:", value);

  const pages = page.context().pages(); //how many pages are open in the browser context

  console.log("Total number of pages:", pages.length);

  // 0th index is the first page, 1st index is the second page and so on

  for (const p of pages) {
    console.log("Page URL:", p.url());
    console.log("Page Title:", await p.title());
  }

  const firstPage = pages[0];
  const secondPage = pages[1];

  console.log("First Page URL:", firstPage.url());
  console.log("First Page Title:", await firstPage.title());

  console.log("Second Page URL:", secondPage.url());
  console.log("Second Page Title:", await secondPage.title());
});
