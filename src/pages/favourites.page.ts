import { BasePage } from "./base.page";

export class FavouritesPage extends BasePage {

    /*private cartOpenLink : string = 'span.bag.bag--float-cart-closed';
    private checkoutButton: string = '.buy-btn';
    private closeCart:string='div.float-cart__close-btn';*/

    
    private itemAddCartButton = (itemName: string) =>`//p[@class="shelf-item__title"][text()="${itemName}"]//ancestor::div[@class="shelf-item"]//div[@class="shelf-item__buy-btn"]`;
    //private itemRemoveCartButton = (itemName: string) =>`//div[@class="float-cart float-cart--open"]//p[text()="${itemName}"]//ancestor::div[@class="shelf-item"]//div[@class="shelf-item__del"]`;

    private removeFavourites = (itemName:string) =>`//p[@class="shelf-item__title"][text()="${itemName}"]//ancestor::div[@class="shelf-item"]//button[@class="MuiButtonBase-root MuiIconButton-root Button clicked "]`;
   
    constructor() {
        super();
    }
     async addToCartItem(itemName: string) {
        await this.driver.Page.click(this.itemAddCartButton(itemName));
    }
    async itemremoveFavourites(itemName: string) {
        await this.driver.Page.click(this.removeFavourites(itemName));
    }
    /*async openCart() {
        await this.driver.Page.click(this.cartOpenLink);
    }
    async clickCheckoutButton() {
        return  await this.driver.Page.click(this.checkoutButton);
    }
   async closeCartbtn(){
        return await this.driver.Page.click(this.closeCart);
    }*/

}