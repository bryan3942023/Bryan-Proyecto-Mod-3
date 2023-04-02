import { BasePage } from "../base.page";


export class headerPage extends BasePage{
    /*private shoppingCartBadge: string = 'span.bag__quantity';
    private closeCart:string='div.float-cart__close-btn';*/
    
    private homeLink:string='a.Navbar_logo__26S5Y';
    private OffersLink:string='a#offers';
    private OrdersLink:string='a#orders';
    private FavouritesLink:string='a#favourites';


    constructor(){
        super();
    }
    async clickLink(link:string) {
        switch (link) {
            case 'home':
            return this.driver.Page.click(this.homeLink);
            break;
            case 'offers':
            return this.driver.Page.click(this.OffersLink);
            break;
            case 'orders':
            return this.driver.Page.click(this.OrdersLink);
            break;
            case 'favourites':
            return this.driver.Page.click(this.FavouritesLink);
            break;
            default:
            return this.driver.Page.click(this.homeLink);
            break;

    }
    }

/*
    async getshoppingCartBadge() {   
        return this.driver.Page.textContent(this.shoppingCartBadge);
    }
    async clickToCloseCart() {
            return this.driver.Page.click(this.closeCart);
    }
*/



}
export const mainHeader= new headerPage();