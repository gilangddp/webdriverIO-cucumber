const { $ } = require('@wdio/globals')

class DashboardPage{

    get addToCartButton() {
        return $('//*[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get cartButton() {
        return $('//*[@id="shopping_cart_container"]/a')
    }

    async clickAddToCart() {
        await this.addToCartButton.click()
    }

    async clickCartButton() {
        await this.cartButton.click()
    }

    async validateOnPage() {
        await expect(this.addToCartButton).toBeDisplayed()
    }

}

module.exports = new DashboardPage();
