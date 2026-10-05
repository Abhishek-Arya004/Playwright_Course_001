import { test, expect } from "../Fixture/testFixture.js";

test("login test perform", async ({ page, loginPage, myinfopage }) => {
  //const LoginPage = new Login_Page(page);
  await loginPage.navigateTopage(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  await loginPage.enterUsername("Admin");
  await loginPage.enterPassword("admin123");
  await loginPage.clicksubmit();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  await myinfopage.clickonMyinfo();

  await myinfopage.fillNames("ARYA", "Kumar");

  await myinfopage.clickonSave();

  //console.log(inner);

  // Wait and capture message

  const toast = page.locator("#oxd-toaster_1 .oxd-toast");

  await expect(toast).toBeVisible();

  const message = await toast.innerText();

  console.log("Toast:", message);

  expect(message).toContain("Successfully");
});
