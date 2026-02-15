import { test, expect } from '@playwright/test'

test('complete demo flow', async ({ page }) => {
  await page.goto('http://localhost:3001/')

  // Wait for page to load
  await page.waitForLoadState('networkidle')

  // Click on demo link in navigation instead of the hero button
  await page.click('nav >> text=Demo')

  // Verify we're on the demo page
  await expect(page).toHaveURL(/.*demo/)
  await expect(page.locator('text=Probier es selbst')).toBeVisible()
  await expect(page.locator('text=Scan starten')).toBeVisible()
})

test('weather page loads', async ({ page }) => {
  await page.goto('http://localhost:3001/weather')
  await page.waitForLoadState('networkidle')
  await expect(page.locator('text=Wetter & Varroa')).toBeVisible()
})

test('harvest page loads', async ({ page }) => {
  await page.goto('http://localhost:3001/harvest')
  await page.waitForLoadState('networkidle')
  await expect(page.locator('text=Ernte-Tracker')).toBeVisible()
})
