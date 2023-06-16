import { expect, test } from '@playwright/test'

test.describe('s', async () => {

    test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: 1400, height: 900 })
    })

    test.afterEach(async ({ context }) => {
        await context.clearCookies();
    })

    test('hey', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        const currentUrl = page.url();
        expect(currentUrl.trim()).toContain('inventory');
    })
})