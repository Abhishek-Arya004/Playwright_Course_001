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

//Hooks

test.skip("Verify Login of parabank", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");

  await page.locator('[name="username"]').fill("arya90");

  await page.locator('[name="password"]').fill("123456");

  await page.getByRole("button", { name: "Log In" }).click();

  await expect(
    page.getByRole("heading", { name: "Accounts Overview" }),
  ).toBeVisible();

  await page.waitForTimeout(5000);
});

test("Register user ", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/register.html");

  await page.locator("#topPanel").click();
  await page.getByRole("link", { name: "Register" }).click();
  await page.locator('[id="customer.firstName"]').dblclick();
  await page.locator('[id="customer.firstName"]').fill("Pri3");
  await page.locator('[id="customer.lastName"]').dblclick();
  await page.locator('[id="customer.lastName"]').fill("kumari");

  await page.locator('[id="customer.address.street"]').fill("delhi");

  await page.locator('[id="customer.address.city"]').fill("faridabaad");

  await page.locator('[id="customer.address.state"]').fill("delhi");

  await page.locator('[id="customer.address.zipCode"]').fill("220034");

  await page.locator('[id="customer.phoneNumber"]').fill("32423423");

  await page.locator('[id="customer.ssn"]').fill("21321312");

  await page.locator('[id="customer.username"]').fill("priya12");

  await page.locator('[id="customer.password"]').fill("1234567");

  await page.locator("#repeatedPassword").fill("1234567");
  await page.getByRole("button", { name: "Register" }).click();

  await expect(page.getByText("Your account was created")).toContainText(
    "Your account was created",
  );

  // await page.getByRole("link", { name: "Open New Account" }).click();
  // await page.getByRole("heading", { name: "Open New Account" }).click();
  // await page.getByRole("button", { name: "Open New Account" }).click();
  // await page.getByText("Congratulations, your account").click();
  // await page.getByText("Your new account number:").click();
  // await page.getByRole("link", { name: "13677" }).click();
  // await page.getByRole("link", { name: "Accounts Overview" }).click();
  // await page.getByRole("link", { name: "Transfer Funds" }).click();
  // await page.locator("#amount").click();
  // await page.locator("#amount").click();
  // await page.locator("#amount").fill("12");
  // await page.getByText("Transfer Funds The amount").click();
  // await page.locator("#toAccountId").selectOption("13677");
  // await page.getByRole("button", { name: "Transfer" }).click();
  // await page.getByRole("heading", { name: "Transfer Complete!" }).click();
  // await page.getByText("$12.00 has been transferred").click();
  // await page.getByRole("link", { name: "Find Transactions" }).click();
  // await page.getByRole("link", { name: "Update Contact Info" }).click();
  // await page.locator('[id="customer.address.state"]').dblclick();
  // await page.locator('[id="customer.address.state"]').fill("noida");
  // await page.getByRole("button", { name: "Update Profile" }).click();
  // await page.getByRole("link", { name: "Log Out" }).click();
});
