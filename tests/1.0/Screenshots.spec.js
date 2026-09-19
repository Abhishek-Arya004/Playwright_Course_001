import { test, expect } from "@playwright/test";

//Screnshot()---->Screen---> Page, full page , element

//Page----->Screenshot()----->Enterview of page or Full page
//Locator--->Screenshot()---->Specific element

test("Take screenshot", async ({ page }) => {
  await page.goto("https://demoqa.com/");

  await page.screenshot({
    path: "screenshots/homepage.png",
  });
});

test("Full page screenshot", async ({ page }) => {
  await page.goto("https://demoqa.com/");

  await page.screenshot({
    path: "screenshots/demoqa-full-page.jpg",
    fullPage: true,
  });
});

test("Element screenshot", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");

  const form = page.locator("#userForm");

  await form.screenshot({
    path: "screenshots/user-form.jpg",
  });
});

test("single Element screenshot", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");

  const fullname = page.locator("#userName-wrapper");

  await fullname.screenshot({
    path: "screenshots/fullname.jpg",
  });
});

//take screenshot after login

test.only("Verify Successful Login", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  // await expect(page).toHaveTitle("OrangeHRM");

  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

  //take the screenshot of page

  const timestamp = Date.now();
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(formatter.format(timestamp));
  console.log("this is test message 1");

  //   await page.screenshot({
  //     path: `screenshots/dashboard-${formatter.format(timestamp)}.jpg`,
  //     fullPage: true,
  //   });

  await page.waitForTimeout(5000);
});
