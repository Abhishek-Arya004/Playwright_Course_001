import { test, expect } from "@playwright/test";
import userdata from "../test-data/userdata.json";

import { Login_Page } from "../PageObjects/Login_Page";

//const { Login_Page } = require("../PageObjects/Login_Page");
for (const data of userdata) {
  test(`login test- ${data.username}`, async ({ page }) => {
    const LoginPage = new Login_Page(page);
    await LoginPage.navigateTopage(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );

    await LoginPage.enterUsername(data.username);
    await LoginPage.enterPassword(data.password);
    await LoginPage.clicksubmit();
    await expect(page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    );
    await expect(
      page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible();
  });
}
