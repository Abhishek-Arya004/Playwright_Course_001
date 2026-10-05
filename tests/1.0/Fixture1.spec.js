//  Before start of your test execution

// const browser = await chromium.launch();-----1
// const context =await browser.newContext();
// const page = await context.newPage();

// page---test

// After execution
// await page.close();
// await context.close();
// await browser.close();

// Dependency injection -----Page---->test('Login test', async({page})=>{ }
import { test, expect } from "@playwright/test";

// test("Browser", async ({ browser }) => {
//   console.log(browser);
// });

test("context test", async ({ context }) => {

  await page = await context.newPage();

  page.goto("https:google.com");
  console.log(context);
});

// test("page", async ({ page }) => {
//   console.log(page);
// });

// Context---->CookieStore, session, authentication:

// Broweser
//    |-----Context1----Page
//    |
//    |-----Context1----Page
//    |
//    |-----Context1----Page


test("page", async ({ page }) => {
  console.log(page);
});

// Fixture life cycle 

/*
1. Test Start ---->Click 

2.Create Browser--->

3. Create  Browser context

4. Create page

5. Page---->inject in Test

6. Run Test

7. Close page ---> context--->Browser.  */

//Fixture scope -->It determine how long they live

// 1. Test scoped: Run Separatly for each test (Default scoped is Test)

   //Test 1-- Creat fixture
   //Test 1-- clean up
 
   //Test 2-- Creat fixture
   //Test 2-- clean up


    //Test1--Page-1
    // Test2-Page-1
    // Test3-Page-1 

    //2. Worker scoped : Runs per process

    //Worker scoped-- one create

    // Worker fixture set up
    //     |
    // // Test1
    //     |
    // // Test2
    //     |
    // // Test3
    //     |
    //    Test4

    // Worker fixture clean up


    // custom fixture----> code---Reuse--Fixture-- Fixture inject in our code.

    //FIXTURE + POM

    // test
    //  |
    // Custom Fixture
    //  |
    // Page Object
    //   |
    //  Playwright Page
    //   |
    //  Application