exports.LoginPage = class LoginPage {


    constructor(page) {
        this.page = page
        this.usernameText = page.getByRole('textbox', { name: 'Username' })
        this.passwordText = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
    }
    async goToLoginPage(url) {
        await this.page.goto(url);
    }

    async login(username, passwrd) {
        await this.usernameText.fill(username)
        await this.passwordText.fill(passwrd)
        await this.login_button.click()
    }

}