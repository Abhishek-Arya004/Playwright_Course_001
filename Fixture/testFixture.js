import { test as base, expect } from "@playwright/test";
import { Login_Page } from "../PageObjects/Login_Page.js";
import { Myinfo } from "../PageObjects/Myinfo_Page.js";
export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new Login_Page(page);
    await use(loginPage);
  },

  myinfopage: async ({ page }, use) => {
    const myinfopage = new Myinfo(page);
    await use(myinfopage);
  },
});
export { expect };
