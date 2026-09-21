export class Login_Page {
  constructor(page) {
    this.page = page;

    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.submit = page.getByRole("button", { name: "Login" });
  }

  async enterUsername(username) {
    await this.username.fill(username);
  }

  async enterPassword(password) {
    await this.password.fill(password);
  }

  async navigateTopage(url) {
    await this.page.goto(url);
  }

  // async navigateTopage(url) {
  //   await this.page.goto(url);
  // }

  async clicksubmit() {
    await this.submit.click();
  }
}

//module.exports = { Login_Page };
