import { test, expect } from "@playwright/test";

//Tags are used for filtering the test cases ( To run specific set of test cases)
// 1000 test cases----->@smoke , @regression , @sanity , @critical ,
//                          100      700            100        100

// describe---->Groping
//hooks-------->SETUP/CLEAN UP
//FIXTURE------>PROVIDE
//Tags---------->FILTER
//annotations---->INFORMATION

test.describe("Sample_1 Tests", () => {
  test("Test-1", { tag: "@smoke" }, async ({ page }) => {
    console.log("Test case-1");
  });

  test("Test-2", { tag: "@smoke" }, async ({ page }) => {
    console.log("Test case-2");
  });

  test("Test-3", { tag: "@regression" }, async ({ page }) => {
    console.log("Test case-3");
  });
});

test.describe("Sample_2 Tests", () => {
  test("Test-6", { tag: "@regression" }, async ({ page }) => {
    console.log("Test case-6");
  });

  test("Test-7", { tag: "@sanity" }, async ({ page }) => {
    console.log("Test case-7");
  });

  test("Test-4", { tag: "@critical" }, async ({ page }) => {
    console.log("Test case-4");
  });
  test("Test-5", { tag: "@critical" }, async ({ page }) => {
    console.log("Test case-5");
  });

  test("Test-8", { tag: ["@critical", "@sanity"] }, async ({ page }) => {
    console.log("Test case-8");
  });
});
