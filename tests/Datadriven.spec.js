import { test, expect } from "@playwright/test";
//import userdata from "../test-data/userdata.json";

//import { readExcelFile } from "../Utils/ExcelReader.js";

import { getTestData } from "../Utils/DataProvider.js";

import { Login_Page } from "../PageObjects/Login_Page";

//import { readCSVFile } from "../Utils/CSVReader.js";

//const excelData = readExcelFile("./test-data/Login_Data.xlsx", "LoginDetails");

//const csvData = readCSVFile("./test-data/Login_Data.csv");

//const { Login_Page } = require("../PageObjects/Login_Page");

const dataSource = getTestData(
  "excel",
  "./test-data/Login_Data.xlsx",
  "LoginDetails",
); // Change this to "json", "excel", or "csv" based on your data source

for (const data of dataSource) {
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
