import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByRole("textbox", { name: "Enter Name" }).click();
  await page
    .getByRole("textbox", { name: "Enter Name" })
    .fill("Abhishek kumar");
  await page.getByRole("textbox", { name: "Enter EMail" }).click();
  await page
    .getByRole("textbox", { name: "Enter EMail" })
    .fill("arya.kr.qa@gmail.com");
  await page.getByRole("textbox", { name: "Enter Phone" }).click();
  await page.getByRole("textbox", { name: "Enter Phone" }).fill("9696761453");
  await page.getByRole("textbox", { name: "Address:" }).click();
  await page.getByRole("textbox", { name: "Address:" }).fill("Noida");
  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await page.getByRole("checkbox", { name: "Sunday" }).check();
  await page.getByRole("checkbox", { name: "Monday" }).check();
  await page.getByRole("checkbox", { name: "Tuesday" }).check();
  await page.getByRole("checkbox", { name: "Wednesday" }).check();
  await page.getByRole("checkbox", { name: "Thursday" }).check();
  await page.getByRole("checkbox", { name: "Friday" }).check();
  await page.getByRole("checkbox", { name: "Saturday" }).check();
  selectOption("japan");
  await page.getByLabel("Colors:").selectOption("red");
  await page.getByLabel("Sorted List:").selectOption("lion");
  await page.locator("#datepicker").click();
  await page
    .locator("#ui-datepicker-div")
    .getByRole("link", { name: "2", exact: true })
    .click();
  await page.locator("#txtDate").click();
  await page.getByRole("link", { name: "14" }).click();
  await page.getByPlaceholder("Start Date").fill("2026-06-15");
  await page.getByPlaceholder("End Date").fill("2026-06-20");
  await page
    .locator("#post-body-1307673142697428135")
    .getByRole("button", { name: "Submit" })
    .click();
  await page.getByText("You selected a range of 5").click();
  await page.locator("#singleFileInput").click();
  await page.locator("#singleFileInput").setInputFiles("API Testing.pdf");
  await page.locator("#multipleFilesInput").click();
  await page
    .locator("#multipleFilesInput")
    .setInputFiles("Part-2 of TestNG Scenario based Questions.pdf");
  await page.locator("#multipleFilesInput").click();
  await page.locator("#multipleFilesInput").setInputFiles("API Testing.pdf");
  await page.getByRole("button", { name: "Upload Multiple Files" }).click();
  await page.locator("#multipleFilesInput").click();
  await page
    .locator("#multipleFilesInput")
    .setInputFiles([
      "API Testing.pdf",
      "Part-2 of TestNG Scenario based Questions.pdf",
    ]);
  await page.getByRole("button", { name: "Upload Multiple Files" }).click();
  await page.getByRole("cell", { name: "300" }).first().dblclick();
  await page.getByRole("cell", { name: "60.8 MB" }).click();
  await page.locator("#displayValues").getByText("%").click();
  await page.locator("#displayValues").getByText("49.0 MB").click();
  await page.locator("td:nth-child(4) > input").first().check();
  await page.locator("tr:nth-child(2) > td:nth-child(4) > input").check();
  await page.getByRole("link", { name: "2", exact: true }).click();
  await page.locator("tr:nth-child(4) > td:nth-child(4) > input").check();
  await page.getByRole("link", { name: "3", exact: true }).click();
  await page.locator("tr:nth-child(3) > td:nth-child(4) > input").check();
  await page.locator("#input1").click();
  await page.locator("#input1").fill("test1");
  await page.locator("#input2").click();
  await page.locator("#input2").fill("test2");
  await page.locator("#input3").click();
  await page.locator("#input3").fill("Test3");
  await page
    .locator("#section1")
    .getByRole("button", { name: "Submit" })
    .click();
  await page
    .locator("#section2")
    .getByRole("button", { name: "Submit" })
    .click();
  await page
    .locator("#section3")
    .getByRole("button", { name: "Submit" })
    .click();
  await page.locator("#shadow_content").getByText("Mobiles").click();
  await page.locator("#nested_shadow_content").getByText("Laptops").click();
  await page.getByRole("link", { name: "Download Files" }).click();
  await page.getByRole("textbox", { name: "Enter Text:" }).dblclick();
  await page
    .getByRole("textbox", { name: "Enter Text:" })
    .fill("this is text for test file");
  await page
    .getByRole("button", { name: "Generate and Download Text" })
    .click();
  await page.getByRole("button", { name: "START" }).click();
  await page.getByRole("button", { name: "START" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Simple Alert" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Confirmation Alert" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Prompt Alert" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "New Tab" }).click();
  const page1 = await page1Promise;
  await page1
    .getByRole("link", {
      name: "What Is AI and Machine Learning? Core Concepts, Types, and Real-World Uses",
    })
    .click();
  await page.getByRole("button", { name: "Point Me" }).click();
  await page.getByText("Field1: Field2: Copy Text").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field2").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field1").dblclick();
  await page.locator("#field1").click();
  await page.locator("#field1").press("ArrowRight");
  await page.locator("#field1").click();
  await page.locator("#field1").click();
  await page.locator("#field1").press("ArrowRight");
  await page.locator("#field1").dblclick();
  await page.getByText("Drag me to my target").click();
  await page.locator("#draggable").click();
  await page.getByText("Drag me to my target").click();
  await page.getByText("Drag me to my target").click();
  await page.getByText("Drag and Drop Drag me to my").click();
  await page.locator("#field1").click();
  await page.locator("#field1").dblclick();
  await page.getByText("Drag me to my target").dblclick();
});
