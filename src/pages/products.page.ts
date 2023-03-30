import { BasePage } from "./base.page";

export class ProductsPage extends BasePage {

    private logoutText: string = '//a[@id="logout"][text()="Logout"]';
   // private logoutText: string = 'span.username';
    private shoppingCartBadge: string = 'span.bag__quantity';
    private closeCart:string='div.float-cart__close-btn';

    private checkoutButton: string = '.buy-btn';
    private favouritesLink: string ='a#favourites';

    //private addtoFavourites = (itemName: string) =>`//p[@class="shelf-item__title"][text()="${itemName}"]//ancestor::div[@class="shelf-item"]/div[@class="shelf-stopper"]/button[@class="MuiButtonBase-root MuiIconButton-root Button clicked"]`;
    private addtoFavourites = (itemName: string) =>`//p[@class="shelf-item__title"][text()="${itemName}"]//ancestor::div[@class="shelf-item"]/div[@class="shelf-stopper"]/button`;
    

    constructor() {
        super();
    }

    private itemAddCartButton = (itemName: string) =>`//p[@class="shelf-item__title"][text()="${itemName}"]//ancestor::div[@class="shelf-item"]//div[@class="shelf-item__buy-btn"]`;
    private itemRemoveCartButton = (itemName: string) =>`//div[@class="float-cart float-cart--open"]//p[text()="${itemName}"]//ancestor::div[@class="shelf-item"]//div[@class="shelf-item__del"]`;


    async addItemToFavourites(itemName: string) {
        await this.driver.Page.click(this.addtoFavourites(itemName));
    }
    async addToCartItem(itemName: string) {
        await this.driver.Page.click(this.itemAddCartButton(itemName));
    }
    async validateRemoveButton(itemName: string) {
        //await this.driver.Page.waitForTimeout(5000);
        return this.driver.isElementDisplayed(this.itemRemoveCartButton(itemName));
    }
    
    async getShoppingCartBadge() {
        return await this.driver.Page.innerText(this.shoppingCartBadge);
    }

    async clickShoppingCartBadge() {
        return await this.driver.Page.click(this.shoppingCartBadge);
    }
    async validatelogin() {
        return await this.driver.Page.isVisible(this.logoutText);
    }
    async closeCartbtn(){
        return await this.driver.Page.click(this.closeCart);
    }


    async clickCheckoutButton() {
        return  await this.driver.Page.click(this.checkoutButton);
    }
    
    async clickfavouritesLink(){
        return  await this.driver.Page.click(this.favouritesLink);
    }



}