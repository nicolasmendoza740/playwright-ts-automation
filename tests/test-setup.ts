import { test as base, expect } from '@playwright/test';

// Re-export a customized test fixture that attaches a screenshot after each test
export const test = base.extend({});

test.afterEach(async ({ page }, testInfo) => {
  const buffer = await page.screenshot({ fullPage: true });
  await testInfo.attach('screenshot', { body: buffer, contentType: 'image/png' });
});

export { expect };