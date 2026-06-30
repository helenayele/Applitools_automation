import { test } from '@playwright/test'

test.skip('Test one', async ({ page }) => {
    //This test will be skipped
})

test('Test two', async ({ page }) => {
    test.skip(browserName == 'firefox', 'Still working on it')
})

test('Not yet ready', async ({ page }) => {
    test.fail('This test should fail')
})

test.fixme('To be fixed', async ({ page }) => {
    //... test.fail('This test should fail')
})
test('slow test', async ({ page }) => {
    test.slow()
})
//tags
test('slow test @smoke', async ({ page }) => {
    //hello
})