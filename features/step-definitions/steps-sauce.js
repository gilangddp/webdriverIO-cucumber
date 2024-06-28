const { Given, When, Then } = require('@wdio/cucumber-framework');

const SauceLoginPage = require('../pageobjects/sauce-login.page.js');
const DashboardPage = require('../pageobjects/sauce-dashboard.page.js'); 

Given("user is on sauce-demo page", async () => {
    //await browser.url("https://www.saucedemo.com/")
    await SauceLoginPage.open ()
})

When(/^user input username with "(.*)"$/, async (username) => {
    await SauceLoginPage.inputUsername(username)
})

When(/^user input password with "(.*)"$/, async (password) => {
    await SauceLoginPage.inputPassword(password)
})

When(/^user click button$/, async () => {
    await SauceLoginPage.clickLoginButton()
})

Then(/^user should redirect to homepage$/, async () => {
    await DashboardPage.validateOnPage()
    await browser.pause(500)
})

Then(/^user click add to cart$/, async () => {
    await DashboardPage.clickAddToCart()
    await browser.pause(500)
})

When(/^user click button cart$/, async () => {
    await DashboardPage.clickCartButton()
    await browser.pause(10000)
})















