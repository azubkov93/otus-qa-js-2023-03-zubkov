const { test, expect } = require('@playwright/test');

const loginUrl = 'http://selenium1py.pythonanywhere.com/ru';

const selectors = {
    loginLink: '#login_link',
    loginInput: '#id_login-username',
    passwordInput: '#id_login-password',
    loginButton: 'button[name="login_submit"]',
    accountLink: '(//ul[contains(@class, "navbar-right")]//a)[1]',
    allProductLink: '//ul[@data-navigation="dropdown-menu"]//a[text()="Все товары"]',
    categoryName: '//div[contains(@class, "page-header")]/h1',
    addToBasketButton: '(//ol[@class="row"]/li)[1]//button',
    successfulText: '#messages',
    searchInput: 'input[name="q"]',
    searchButton: '[method="get"] [type="submit"]',
    registrationEmailInput: '#id_registration-email',
    registrationpasswordInput: '#id_registration-password1',
    registrationpassword2Input: '#id_registration-password2',
    registrationSubmitButton: '[name="registration_submit"]',
    registrationError: '.error-block'
}

const credentials = {
    login: 'test_otus_test@mail.ru',
    password: 'kvs;8%FH]gJrU$r'
}


test('Успешный логин', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator(selectors.loginLink).click();
    await page.locator(selectors.loginInput).fill(credentials.login);
    await page.locator(selectors.passwordInput).fill(credentials.password);
    await page.locator(selectors.loginButton).click();
    await expect(page.locator(selectors.accountLink)).toBeVisible();
})

test('Переход на страницу "Все товары"', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator(selectors.allProductLink).click();
    await expect(await page.textContent(selectors.categoryName)).toBe('Все товары');
})

test('Добавить в корзину', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator(selectors.allProductLink).click();
    await page.locator(selectors.addToBasketButton).click();
    await expect(page.locator(selectors.successfulText)).toBeVisible();
})

test('Регистрация по уже зарегистрированной почте', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator(selectors.loginLink).click();
    await page.locator(selectors.registrationEmailInput).fill(credentials.login);
    await page.locator(selectors.registrationpasswordInput).fill(credentials.password);
    await page.locator(selectors.registrationpassword2Input).fill(credentials.password);
    await page.locator(selectors.registrationSubmitButton).click();
    await page.waitForSelector(selectors.registrationError);
    await expect(await page.textContent(selectors.registrationError)).toBe(' Пользователь с таким адресом электронной почты уже зарегистрирован.');

})

test('Поиск', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator(selectors.searchInput).fill("The shellcoder's handbook");
    await page.locator(selectors.searchButton).click();
    await expect(page.locator('//ol[@class="row"]/li//a[@title="The shellcoder\'s handbook"]')).toBeVisible()
    })