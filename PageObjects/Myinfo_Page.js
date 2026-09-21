export class Myinfo {
  constructor(page) {
    this.page = page;

    this.clickmyinfo = page.getByRole("link", { name: "My Info" });

    this.firstname = page.getByRole("textbox", { name: "First Name" });

    this.middlename = page.getByRole("textbox", { name: "Middle Name" });

    this.clickonsave = page
      .locator("form")
      .filter({ hasText: "Employee Full NameEmployee" })
      .getByRole("button");
  }

  async clickonMyinfo() {
    await this.clickmyinfo.click();
  }

  async fillNames(firstname, middelname) {
    await this.firstname.fill(firstname);
    await this.middlename.fill(middelname);
  }

  async clickonSave() {
    await this.clickonsave.click();
  }
}
