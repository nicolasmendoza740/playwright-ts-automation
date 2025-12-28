import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async click(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }
  
  async timeout(value: number) {
    await this.page.waitForTimeout(value);
  }

  async takeScreenshot(name: string) {
    const buffer = await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true
    });
    return buffer;
  }
}
