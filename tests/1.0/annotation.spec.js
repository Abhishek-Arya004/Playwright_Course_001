//annoations are metadata or instructions you attach to tests.They help us
//tel playwrite why a test behaves a certain way, which category, additions

import { test, expect } from "@playwright/test";

test(
  "login test",
  {
    annotation: {
      type: "Issue",
      description: "It belong to orangeHRM",
    },
  },
  async ({ page }) => {},
);

//test.skip()
//test.fail()
//test.fixme()
//test.slow()

test.skip("Test-1", { tag: "@smoke" }, async ({ page }, testInfo) => {
  testInfo.annotations.push({
    type: "skip type",
  });
  console.log("Test case-skip");
});

test("Test-2", { tag: "@smoke" }, async ({ page }, testInfo) => {
  testInfo.annotations.push({
    type: "skip type",
  });
  console.log("Test case-2");
});

test.fail("Test-3", { tag: "@smoke" }, async ({ page }) => {
  console.log("Test case-fail");

  await expect(page.getByText("Contact dsfsdfsd")).toBeVisible();
});

test.fixme("Test-4", { tag: "@smoke" }, async ({ page }) => {
  console.log("Test case-fixme");

  // await expect(page.getByText("Contact dsfsdfsd")).toBeVisible();
});

test.slow("Test-5", { tag: "@smoke" }, async ({ page }) => {
  console.log("Test case-slow");

  await expect(page.getByText("Contact dsfsdfsd")).toBeVisible();
});
