//Hooks in Playwrigh

// | Hook         | When it runs                     |
// | ------------ | -------------------------------- |
// | `beforeEach` | Before every test                |
// | `afterEach`  | After every test                 |
// | `beforeAll`  | Once before all tests in a group |
// | `afterAll`   | Once after all tests in a group  |

//valid scenario---Successful Login---->URL
//invalid scenario--Unsucessful Login--->URL

//Hooks(URL)------>Valid scenario or invalid

import { test, expect } from "@playwright/test";

// test.beforeAll(async ({}) => {
//   console.log("before_All");
// });

// test.beforeEach(async ({ page }) => {
//   console.log("before_each");
// });

// test("Test-1", async ({ page }) => {
//   console.log("Test case-1");
// });

// test("Test-2", async ({ page }) => {
//   console.log("Test case-2");
// });

// test("Test-3", async ({ page }) => {
//   console.log("Test case-3");
// });

// // test.afterEach(async ({ page }) => {
// //   console.log("After_each");
// // });

// // test.afterAll(async ({}) => {
// //   console.log("After_All");
// // });

// //Group our test cases

// test.describe("Login Tests", () => {
//   test.beforeAll(async ({}) => {
//     console.log("before_All");
//   });

//   test.beforeEach(async ({ page }) => {
//     console.log("before_each");
//   });

//   test("Successful login", async ({ page }) => {
//     console.log("Successful login");
//   });

//   test("Unsucessful login", async ({ page }) => {
//     console.log("Unsucessful login");
//   });

//   test.afterEach(async ({ page }) => {
//     console.log("After_each");
//   });

//   test.afterAll(async ({}) => {
//     console.log("After_All");
//   });
// });

// test.describe("Registration  Tests", () => {
//   test.beforeAll(async ({}) => {
//     console.log("before_All");
//   });

//   test.beforeEach(async ({ page }) => {
//     console.log("before_each");
//   });

//   test("Successful login", async ({ page }) => {
//     console.log("Successful Registration");
//   });

//   test("Unsucessful login", async ({ page }) => {
//     console.log("Unsucessful Registration");
//   });

//   test.afterEach(async ({ page }) => {
//     console.log("After_each");
//   });

//   test.afterAll(async ({}) => {
//     console.log("After_All");
//   });
// });

// Login---> Valid and invalid
// Registration---> Success or  invalid
// Createaccount--->
// Update User detaiis--->

test.beforeEach(async ({ page }) => {
  console.log("before_each");

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
});

test("Verify Successful Login", async ({ page }) => {
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(page).toHaveTitle("OrangeHRM");
  await page.waitForTimeout(5000);
});

test("Verify unsuccessful login", async ({ page }) => {
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("wrongpassword");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(
    page.locator(".oxd-alert-content.oxd-alert-content--error > p"),
  ).toHaveText("Invalid credentials");

  await expect(page).toHaveTitle("OrangeHRM");
  await page.waitForTimeout(5000);
});
