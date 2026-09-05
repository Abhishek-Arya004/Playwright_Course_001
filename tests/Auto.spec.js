import { test, expect } from "@playwright/test";

test("Fill the form", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.getByRole("textbox", { name: "First Name" }).fill("Abhishek");
  await page.getByPlaceholder("Enter Name").fill("Abhishek");

  await expect(page.getByPlaceholder("Enter Name")).toHaveValue("Abhishek");

  await page.getByPlaceholder("Enter EMail").fill("test@gmail.com");

  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await expect(page.getByRole("radio", { name: "Male", exact: true })).toBeChecked();
  
  await page.getByRole("checkbox", { name: "Cricket" }).check();
  
  await expect(page.getByRole("checkbox", { name: "Cricket" })).toBeChecked();

  //textcontent
  // const textval = await page
  //   .locator(
  //     "#HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(4)",
  //   )
  //   .textContent();
  // console.log(textval);

  //innertext
  // const innertextval = await page
  //   .locator("HTML1 > div.widget-content > table")
  //   .innerText();
  // console.log(innertextval);

  //innerhtml
  // const innerhtmlval = await page
  //   .locator("#HTML1 > div.widget-content > table")
  //   .innerHTML();
  // console.log(innerhtmlval);

  // const innerhtmlval = await page.locator(".submit-btn").innerText();
  // console.log(innerhtmlval);

  // await page.waitForTimeout(5000);

  //#HTML1 > div.widget-content > table > tbody > tr:nth-child(1) > th:nth-child(1)

  const innerhtmlval = await page
    .locator(
      "#HTML1 > div.widget-content > table > tbody > tr:nth-child(1) > th",
    )
    .allInnerTexts();
  console.log(innerhtmlval);

  // const innerhtmlval1 = await page
  //   .locator(
  //     "#HTML1 > div.widget-content > table > tbody > tr:nth-child(1) > th",
  //   )
  //   .first()
  //   .textContent();

  // console.log(innerhtmlval1);

  // const innerhtmlval1 = await page
  //   .locator(
  //     "#HTML1 > div.widget-content > table > tbody > tr:nth-child(1) > th",
  //   )
  //   .nth(3)
  //   .textContent();

  // console.log(innerhtmlval1);

  // await page.waitForTimeout(5000);

  await page
    .locator(
      "#HTML1 > div.widget-content > table > tbody > tr:nth-child(1) > th",
    )
    .nth(3)
    .expect()
    .toHaveText("Price");

  //console.log(innerhtmlval1);

  import { test, expect } from "@playwright/test";

test("Keyboard actions", async ({ page }) => {

  await page.goto("https://demoqa.com/text-box");

  const name = page.getByPlaceholder("Full Name");

  await name.fill("Abhishek");

  await name.press("Tab");

});


  // ,<a> , <p> , <h1> , <h2> , <h3> , <h4> , <h5> , <h6> , <span> , <div>
  // const innerhtmlval = await page.locator("h1").innerText();
  // console.log(innerhtmlval);

  #rows > tr:nth-child(1) > td:nth-child(5)
});
