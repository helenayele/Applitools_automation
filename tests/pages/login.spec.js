import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('login', async ({ page }) => {
    const Login = new LoginPage(page);

    await Login.goToLoginPage('https://the-internet.herokuapp.com/login');
    // await page.goto('https://the-internet.herokuapp.com/login');
    //await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPAssword');
    // await page.getByRole('button', { name: 'Login' }).click();
    await Login.login('tomsmith', 'SuperSecretPassword')
});