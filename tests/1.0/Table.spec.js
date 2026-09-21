import { test, expect } from "@playwright/test";

//fetch table records
// test("fetch table records", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const innerhtmlval = await page
//     .locator("#HTML1 > div.widget-content > table > tbody > tr:nth-child(2)")
//     .innerHTML();
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

//   const Allcellvalues = await innerhtmlval.locator("td").allInnerTexts();
//   const cells = await innerhtmlval.locator("td:nth-child(2)").innerText();
//   console.log(Allcellvalues);
//   console.log(cells);

//   await page.waitForTimeout(5000);
// });

// #productTable > tbody > tr:nth-child(1) > td:nth-child(2)

// test("Click on checkbox same row for value E-Reader-1", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const row = page.locator("#productTable > tbody > tr").filter({
//     hasText: "Smartphone",
//   });

//   console.log(row);

//   await row.locator("input[type=checkbox]").check();

//   await page.waitForTimeout(5000);
// });

// test("Click on checkbox same row for value E-Reader-2", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const row = page.locator("#productTable > tbody > tr");

//   console.log(await row.count());

//   //wait row.locator("input[type=checkbox]").check();

//   await page.waitForTimeout(5000);
// });

// Fetch all records:

// test("Fetch all records:", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");

//   const rows = page.locator("#productTable > tbody > tr");

//   console.log(await rows.count());

//   for (let i = 0; i < (await rows.count()); i++) {
//     const rowtext = await rows.nth(i).innerText();

//     console.log(`Row ${i + 1}: ${rowtext}`);
//   }

//   //   await page.waitForTimeout(5000);
// });

// SOUND BAR --TRAGET

//PAGE
//TARGET = "SOUND BAR"

//ROW---LOCATOTS

//NEXT BUTTON---NEXT BUTTON LOCATOR ---CLICK 1 , 2, 3

//TABLE BODY == > PAGE.LOCATOT---FECT--CELL

//LET FOUND = FALSE

test("HANDEL PAGINATION:", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const target = "Soundbar";

  let found = false;

  const rows = page.locator("#productTable > tbody > tr");

  const table = page.locator("#productTable");

  //#pagination > li:nth-child(1) > a

  const nextButton = page.locator("#pagination > li:nth-child(1) > a");

  console.log(await rows.count());

  const maxpage = 6;

  for (let pagenum = 1; pagenum <= maxpage; pagenum++) {
    await expect(table).toBeVisible();

    const targetRow = rows
      .filter({
        hasText: target,
      })
      .first();

    if ((await targetRow.count()) > 0) {
      const checkbox = targetRow.locator('intput[type="checkbox"]');
      await checkbox.check();
      console.log(`target${target} selected on page ${pagenum}`);

      found = true;
      break;
    }

    if ((await nextButton.count()) === 0) {
      break;
    }

    const previousRows = await this.row.allTextContenst();

    await this.
  }

  //   await page.waitForTimeout(5000);
});
