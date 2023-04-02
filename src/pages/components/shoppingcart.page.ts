 import { BasePage } from "../base.page";


export class shoppingcartPage extends BasePage{
    private shoppingCartBadge: string = 'span.bag__quantity';
    private closeCart:string='div.float-cart__close-btn';
    private checkoutButton: string = '.buy-btn';


    private removeProduct = (product: string) =>`//p[text()='${product}']//ancestor::div[@class='shelf-item']//div[@class='shelf-item__del']`;
    
    private locatorRemoveProduct= (number: string) =>`(//div[@class="shelf-item__del"])['${number}']`;

    constructor(){
        super();
    }

    //async getElementText() {
    async getshoppingCartBadge() {
        //await this.driver.Page.click(this.itemAddCartButton(itemName));
        
        return this.driver.Page.textContent(this.shoppingCartBadge);
    }
    async clickToCloseCart() {
            return this.driver.Page.click(this.closeCart);
    }
    async clickCheckoutButton() {
        return  await this.driver.Page.click(this.checkoutButton);
    }
  /*  async getShoppingCartBadge() {
        return await this.driver.Page.innerText(this.shoppingCartBadge);
    }*/

    async clickShoppingCartBadge() {
        return await this.driver.Page.click(this.shoppingCartBadge);
    }
  /* async closeCartbtn(){
        return await this.driver.Page.click(this.closeCart);
    }*/

    async clickRemoveProduct(product: string){
        await this.driver.Page.click(this.removeProduct(product));
    }

    async removeAllProducts(){
        const cantProd=Number(await this.getshoppingCartBadge());
        for (let index = 1; index <= cantProd; index++) {
        await this.driver.Page.click(this.locatorRemoveProduct(String(index)));
        }
        
    }

}
export const shoppingcart= new shoppingcartPage();