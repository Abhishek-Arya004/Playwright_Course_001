import { test, expect } from "@playwright/test";

// test("Verify Registration of parabank", async ({ page }) => {
//   await page.goto("https://parabank.parasoft.com/parabank/register.htm");

//   await page.locator('[id="customer.firstName"]').fill("Pooja");

//   await page.locator('[id="customer.lastName"]').fill("Singh");

//   await page
//     .locator('[id="customer.address.street"]')
//     .fill("456 124 near sports academy");

//   await page.locator('[id="customer.address.city"]').fill("Noida");

//   await page.locator('[id="customer.address.state"]').fill("Uttar Pradesh");

//   await page.locator('[id="customer.address.zipCode"]').fill("201301");

//   await page.locator('[id="customer.phoneNumber"]').fill("787879879878");

//   await page.locator('[id="customer.ssn"]').fill("1243");

//   await page.locator('[id="customer.username"]').fill("arya123");

//   await page.locator('[id="customer.password"]').fill("123456");

//   await page.locator("#repeatedPassword").fill("123456");

//   await page.getByRole("button", { name: "Register" }).click();

//   await expect(
//     page.getByRole("heading", { name: "Welcome arya123" }),
//   ).toBeVisible();

//   await page.waitForTimeout(5000);
// });

//arya90
//123456

test("Verify Login of parabank", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");

  await page.locator('[name="username"]').fill("arya90");

  await page.locator('[name="password"]').fill("123456");

  await page.getByRole("button", { name: "Log In" }).click();

  await expect(
    page.getByRole("heading", { name: "Accounts Overview" }),
  ).toBeVisible();

  await page.waitForTimeout(5000);
});
