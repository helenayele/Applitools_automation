import { test, expect } from '@playwright/test';

test('Test login page', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('username')

    await page.getByRole('textbox', { name: 'Enter your password' }).fill('pass');
    await page.getByRole('checkbox', { name: 'Remember Me' }).check();
    await page.getByRole('link', { name: 'Sign in' }).click();
});

test('Login orangehrmlive', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    await page.locator('p:has-text("manda user")').click()
    await page.locator('text=Logout').click()
    await page.close();
})

test.only('Login nopcommerce test', async ({ page }) => {
    await page.pause
    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.pause
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).press('Control+a');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourscore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).press('Control+a');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.close
})