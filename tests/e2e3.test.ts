import { driverInstance } from "../src/core/driver";
import { CheckoutPage } from "../src/pages/checkout.page";
import { ProductsPage } from "../src/pages/products.page";
import { LoginPage } from "../src/pages/login.page";
import { userData } from "../user-data";
import { productsList } from "../products-list";
//import {  mainHeader } from "../src/pages/components/header.page";
import { shoppingcart } from "../src/pages/components/shoppingcart.page";

describe('Select all products of the page and validate ', () => {
    let loginPage: LoginPage = new LoginPage();
    let productsPage: ProductsPage =  new ProductsPage();
    let checkoutPage: CheckoutPage = new CheckoutPage();

    beforeAll( async () => {
        await driverInstance.start(userData.browser);
        await loginPage.navigateTo(userData.url);
        await loginPage.Login();        
    }, 20000);

    afterAll(async () => {
        await driverInstance.closeDriver();

    });
    
    test('Select products all products(25) and validate', async () => {

        for(let prod of productsList) {
            //console.log(prod);    
            await productsPage.addToCartItem(prod);
            await shoppingcart.clickToCloseCart();
        }

        await shoppingcart.clickShoppingCartBadge();
        await shoppingcart.clickCheckoutButton();
        //const badge = await productsPage.getShoppingCartBadge();
        const badge = await shoppingcart.getshoppingCartBadge();
        expect(badge).toBe("25");


      /*  await checkoutPage.checkoutInformation('Bryan', 'Felipez','Street Test','State Test', '00000');
        const actualCompleteMessage = await checkoutPage.getCompleteOrderMessage();
        expect(actualCompleteMessage).toBe('Your Order has been successfully placed.');
        const  totalA = await checkoutPage.checkoutTotal();
        console.log(totalA);
        await checkoutPage.clickFinishOrderButton();*/

    },35000);
});