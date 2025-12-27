import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {

  test('login exitoso', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('login inválido', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('usuario_invalido', 'password_invalido');

    await expect(loginPage.errorMessage).toBeVisible();
    await loginPage.timeout(1000);
    await loginPage.takeScreenshot('login-fallido');
  });

}); 
