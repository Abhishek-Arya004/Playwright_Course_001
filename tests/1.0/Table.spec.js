import { test, expect } from "@playwright/test";

//fetch table records
// test("fetch table records", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const innerhtmlval = page.locator("#productTable > tbody > tr").innerHTML();
//   console.log(innerhtmlval);

//   await page.waitForTimeout(5000);
// });

// test("fetch table cells", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const innerhtmlval = await page
//     .locator("#HTML1 > div.widget-content > table > tbody > tr:nth-child(2)")
//     .filter({
//       has: page.getByText("Amit", { exact: true }),
//     });

//   const cells = await innerhtmlval.locator("td").allInnerTexts();
//   console.log(cells);

//   await page.waitForTimeout(5000);
// });

//#productTable > tbody > tr:nth-child(1) > td:nth-child(2)

test("Click on checkbox same row for value E-Reader-1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const row = page.locator("#productTable > tbody > tr").filter({
    hasText: "Smartphone",
  });

  console.log(row);

  await row.locator("input[type=checkbox]").check();

  await page.waitForTimeout(5000);
});

test("Click on checkbox same row for value E-Reader-2", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const row = page.locator("#productTable > tbody > tr");

  console.log(await row.count());

  //wait row.locator("input[type=checkbox]").check();

  await page.waitForTimeout(5000);
});
