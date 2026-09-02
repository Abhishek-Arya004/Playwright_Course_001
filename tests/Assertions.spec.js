//What is assersions in testing?:
//Assertions in testing are statements that check
// if a certain condition is true or false during the execution of a test.
//  They are used to validate that the code behaves as expected.
//  If an assertion fails, it indicates that there is a bug or an issue in the code being tested. Assertions help
//  ensure that the software meets its requirements and functions correctly. Common types of assertions include checking for equality,
// truthiness, null values, and exceptions.

//pass--- or fail---->test cases-----> Expected---value----->Actual ----> E == A----Pass or fail

//test---->pass or fail----condtion----Asertions

//Simple rule ----Action----->Applucation-----Assertions---->Pass or fail

//await page.getbyrole("button", { name: "Login" }).click();----->Bashboard
//await expect(page).toHaveURL("https://example.com/dashboard");---->Pass or fail

//expect(actual).toBe(expected);---->Pass or fail |general syntax
// "this is test"---->expect("this is test").toBe("this is test");---->Pass
//this is test"---->expect("this is test").toContain("this");-->pass

//List of Asertions in Playwright:
//1. toBe() - Checks if the actual value is equal to the expected value.
//expect(actual).toBe(expected);
//2. toEqual() - Checks if the actual value is deeply equal to the expected value.
//expect(actual).toEqual(expected);
//3. toBeTruthy() - Checks if the actual value is truthy (not null, undefined, false, 0, or an empty string).
//expect(actual).toBeTruthy();
//4. toBeFalsy() - Checks if the actual value is falsy (null, undefined, false, 0, or an empty string).
//expect(actual).toBeFalsy();
//5. toContain() - Checks if the actual value contains the expected value.
//expect(actual).toContain(expected);
//6. toHaveLength() - Checks if the actual value has the expected length.
//expect(actual).toHaveLength(expected);
//7. toBeGreaterThan() - Checks if the actual value is greater than the expected value.
//expect(actual).toBeGreaterThan(expected);
//8. toBeLessThan() - Checks if the actual value is less than the expected value.
//expect(actual).toBeLessThan(expected);
//9. toThrow() - Checks if a function throws an error when called.
//expect(() => { throw new Error("Error message"); }).toThrow("Error message");
//10. toMatch() - Checks if the actual value matches a regular expression pattern.
//expect(actual).toMatch(/pattern/);
//11. toBeDefined() - Checks if the actual value is defined (not undefined).
//
//expect(actual).toBeDefined();
//12. toBeNull() - Checks if the actual value is null.
//expect(actual).toBeNull();
//13. toBeNaN() - Checks if the actual value is NaN (Not a Number).
//14. toBeInstanceOf() - Checks if the actual value is an instance of a specific class or constructor.
//15. toHaveProperty() - Checks if the actual object has a specific property with an expected value.
//16. toBeCloseTo() - Checks if the actual number is close to the expected number within a specified precision.
//17. toBeGreaterThanOrEqual() - Checks if the actual value is greater than or equal to the expected value.
//18. toBeLessThanOrEqual() - Checks if the actual value is less than or equal to the expected value.
//19. toHaveBeenCalled() - Checks if a mock function has been called.
//20. toHaveBeenCalledWith() - Checks if a mock function has been called with specific arguments.
//21. toHaveBeenCalledTimes() - Checks if a mock function has been called a specific number of times.
//22. toHaveBeenLastCalledWith() - Checks if a mock function was last called with specific arguments.
//23. toHaveBeenNthCalledWith() - Checks if a mock function was called with specific arguments on the nth call.
//24. toHaveReturned() - Checks if a mock function has returned a value.
//25. toHaveReturnedWith() - Checks if a mock function has returned a specific value.
//26. toHaveReturnedTimes() - Checks if a mock function has returned a specific number of times.
//27. toHaveReturnedLastWith() - Checks if a mock function last returned a specific value.
//28. toHaveReturnedNthWith() - Checks if a mock function returned a specific value on the nth call.

//tobevisible() - Checks if the actual element is visible on the page.
//expect(element).toBeVisible();

//tobechecked() - Checks if the actual checkbox or radio button is checked.
//expect(checkbox).toBeChecked();

//tobedisabled() - Checks if the actual element is disabled.
//expect(element).toBeDisabled();

//toBeHidden() - Checks if the actual element is hidden on the page.
//expect(element).toBeHidden();

//toHaveText() - Checks if the actual element has the expected text content.
//expect(element).toHaveText(expectedText);

//toHaveValue() - Checks if the actual input element has the expected value.
//expect(inputElement).toHaveValue(expectedValue);

//toHaveAttribute() - Checks if the actual element has the expected attribute with a specific value.
//expect(element).toHaveAttribute(attributeName, expectedValue);

//toHaveClass() - Checks if the actual element has the expected CSS class.
//expect(element).toHaveClass(expectedClass);

//toHaveStyle() - Checks if the actual element has the expected inline style.
//expect(element).toHaveStyle(expectedStyle);

//toBeFocused() - Checks if the actual element is currently focused.
//expect(element).toBeFocused();

//toBeEditable() - Checks if the actual input or textarea element is editable.
//expect(inputElement).toBeEditable();

//tobeEnabled() - Checks if the actual element is enabled (not disabled).
//expect(element).toBeEnabled();

//toHaveCount() - Checks if the actual element has the expected number of child elements.
//expect(element).toHaveCount(expectedCount);

//toHaveScreenshot() - Checks if the actual element matches the expected screenshot.
//expect(element).toHaveScreenshot(expectedScreenshot);

//toHaveScreenshot() - Checks if the actual page matches the expected screenshot.
//expect(page).toHaveScreenshot(expectedScreenshot);

//toHaveScreenshot() - Checks if the actual page matches the expected screenshot with a specific threshold for differences.
//expect(page).toHaveScreenshot(expectedScreenshot, { threshold: 0.1 });

//toHaveScreenshot() - Checks if the actual page matches the expected screenshot with a specific threshold for differences and a specific region to compare.
//expect(page).toHaveScreenshot(expectedScreenshot, { threshold: 0.1, region: { x: 0, y: 0, width: 100, height: 100 } });

//text assertions
//toHaveText() - Checks if the actual element has the expected text content.
//expect(element).toHaveText(expectedText);

//toContainText() - Checks if the actual element contains the expected text content.
//expect(element).toContainText(expectedText);

//toHaveValue() - Checks if the actual input element has the expected value.
//expect(inputElement).toHaveValue(expectedValue);

//toHaveAttribute() - Checks if the actual element has the expected attribute with a specific value.
//expect(element).toHaveAttribute(attributeName, expectedValue);

//toHaveClass() - Checks if the actual element has the expected CSS class.
//expect(element).toHaveClass(expectedClass);

//toHaveStyle() - Checks if the actual element has the expected inline style.
//expect(element).toHaveStyle(expectedStyle);

//input assertions
//toBeEditable() - Checks if the actual input or textarea element is editable.
//expect(inputElement).toBeEditable();

//toHaveValue() - Checks if the actual input element has the expected value.
//expect(inputElement).toHaveValue(expectedValue);

//toBeChecked() - Checks if the actual checkbox or radio button is checked.
//expect(checkbox).toBeChecked();

//toBeDisabled() - Checks if the actual element is disabled.
//expect(element).toBeDisabled();

//toBeEnabled() - Checks if the actual element is enabled (not disabled).
//expect(element).toBeEnabled();

//URL assertions
//toHaveURL() - Checks if the actual page has the expected URL.
//expect(page).toHaveURL(expectedURL);

//toHaveTitle() - Checks if the actual page has the expected title.
//expect(page).toHaveTitle(expectedTitle);

//negative assertions
//toBeNull() - Checks if the actual value is null.
//expect(actual).toBeNull();

//toBeUndefined() - Checks if the actual value is undefined.
//expect(actual).toBeUndefined();

//toBeFalsy() - Checks if the actual value is falsy (null, undefined, false, 0, or an empty string).
//expect(actual).toBeFalsy();

//toBeGreaterThan() - Checks if the actual value is greater than the expected value.
//expect(actual).toBeGreaterThan(expected);

//toBeLessThan() - Checks if the actual value is less than the expected value.
//expect(actual).toBeLessThan(expected);

//toThrow() - Checks if a function throws an error when called.
//expect(() => { throw new Error("Error message"); }).toThrow("Error message");

//toMatch() - Checks if the actual value matches a regular expression pattern.
//expect(actual).toMatch(/pattern/);

//Auto retry in Assertions

//toBeVisible() - Checks if the actual element is visible on the page.

//await expect(element).toBeVisible({ timeout: 5000 }); // Waits up to 5 seconds for the element to become visible

//  If the element is not immediately visible,
// Playwright will automatically retry the assertion
// for a certain period of time before failing the test.

//Page.wiatforTimeout() - Sets the maximum time to wait for an assertion to pass before failing the test.

//Hard Assertions vs Soft Assertions

//hard assertions: In hard assertions, if an assertion fails, the test execution stops immediately,
// and the test is marked as failed. This is the default behavior in most testing frameworks,
//  including Playwright. Hard assertions are useful when you want to ensure that a critical condition is met
// before proceeding with further test steps.

//Example of hard assertion in Playwright:
// import { test, expect } from "@playwright/test";

// test("Verify login functionality", async ({ page }) => {
//   await page.goto("https://example.com/login");

//   // Perform login actions
//   await page.fill("#username", "testuser");
//   await page.fill("#password", "password123");
//   await page.click("#loginButton");
//   await expect(page).toHaveURL("https://example.com/dashboard"); // Hard assertion

//soft assertions: In soft assertions, if an assertion fails,
// the test execution continues, and the test is marked as failed at the end.
// Soft assertions allow you to collect multiple assertion failures in a single test run,
//  which can be useful for reporting and debugging purposes.
// However, Playwright does not have built-in support for soft assertions,
// so you would need to implement your own mechanism to achieve this behavior.
// //exam[le of soft assertion in Playwright:
// import { test, expect } from "@playwright/test";

// test("Verify multiple conditions", async ({ page }) => {
//   await page.goto("https://example.com");

//   // Perform some actions

//   // Soft assertion example (custom implementation)
//   let softAssertionFailed = false;

//   try {
//     await expect(page.locator("#element1")).toBeVisible();
//   } catch (error) {
//     softAssertionFailed = true;
//     console.error("Soft assertion failed for element1:", error);
//   }

//   try {
//     await expect(page.locator("#element2")).toHaveText("Expected Text");
//   } catch (error) {
//     softAssertionFailed = true;
//     console.error("Soft assertion failed for element2:", error);
//   }

//   // Continue with other test steps...

//   if (softAssertionFailed) {
//     throw new Error("One or more soft assertions failed.");
//   }
// });

//await expect.soft(page.locator("#element1")).toBeVisible();
//await expect.soft(page.locator("#element2")).toHaveText("Expected Text");
//
//soft assertions allow you to continue executing the test even if some assertions fail, and you can
// report all failures at the end of the test run.

//Assertion vs Actions

//Action.         Assertions
// click()         toBeVisible()
// fill()          toHaveValue()
// hover()         toBeEnabled()//toBeDisabled()//
// dragAndDrop()   toHaveText()
// selectOption()  toBeChecked()//toBeDisabled()//toBeEnabled()
// waitForSelector() toBeDisabled()
//check()          toBeChecked()
//goto()           toHaveURL()//toHaveTitle()

import { test, expect } from "@playwright/test";

test("Verify drag and drop actions", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
  );
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(page).toHaveTitle("OrangeHRM");
});
