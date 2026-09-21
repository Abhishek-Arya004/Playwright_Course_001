import { test, expect } from "@playwright/test";
import { Login_Page } from "../PageObjects/Login_Page";
import { Myinfo } from "../PageObjects/Myinfo_Page";

test("test", async ({ page }) => {
  const LoginPage = new Login_Page(page);
  await LoginPage.navigateTopage(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await LoginPage.enterUsername("Admin");
  await LoginPage.enterPassword("admin123");
  await LoginPage.clicksubmit();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );

  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  // await page.getByRole("link", { name: "My Info" }).click();

  // await page.getByRole("textbox", { name: "First Name" }).fill("Captain123");

  // await page.getByRole("textbox", { name: "Middle Name" }).fill("QA Engineer");

  const info_obj = new Myinfo(page);

  await info_obj.clickonMyinfo();

  await info_obj.fillNames("ARYA", "Kumar");

  await info_obj.clickonSave();

  const inner = await page.locator("#oxd-toaster_1").innerHTML();

  console.log(inner);

  // Wait and capture message

  const toast = page.locator("#oxd-toaster_1 .oxd-toast");

  await expect(toast).toBeVisible();

  const message = await toast.innerText();

  console.log("Toast:", message);

  expect(message).toContain("Successfully");

  //   await page
  //     .locator("div")
  //     .filter({ hasText: /^Marital StatusSingle$/ })
  //     .first()
  //     .click();

  //await page.getByRole("option", { name: "Married" }).click();
});
