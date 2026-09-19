import { test, expect } from "@playwright/test";

import { Login_Page } from "../PageObjects/Login_Page";

//const { Login_Page } = require("../PageObjects/Login_Page");

test("login test perform", async ({ page }) => {
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
});
