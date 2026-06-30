import test, { page, expect } from '@playwright/test'

test('Verify title', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    //Assertions
    //Check if element is present
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }
    //check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled

    //check text 
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect(page.locator('text=The Kitchen')).not.toHaveText('dfdfddf')

    //attribute verification
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)
});

test('verify page url', async ({ page }) => {
    // await expect(page).toHaveTitle(/.*Kitchen/);
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
})
test('verify screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot();
})