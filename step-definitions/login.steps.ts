import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CreatePost from '../pages/CreatePost';

let loginPage: LoginPage;

Given('I open the login page', async function () {
    loginPage = new LoginPage(this.page); 
    await loginPage.goto('https://58g6w7d4-9091.uks1.devtunnels.ms/admin/login/?next=/admin/');
    await loginPage.clickContinue();
});

Given('I open the login page 2', async function () {
    loginPage = new LoginPage(this.page); 
    await loginPage.goto('https://58g6w7d4-9092.uks1.devtunnels.ms/admin/login/?next=/admin/');
    await loginPage.clickContinue();
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
    await loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async function () {
    const isDashboardVisible = await loginPage.isDashboardVisible();
    expect(isDashboardVisible).toBe(true); 
});

Then('I should see an error message', async function () {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain("Please enter the correct"); 
});


