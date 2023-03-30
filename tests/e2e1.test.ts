import { driverInstance } from "../src/core/driver";
import { CheckoutPage } from "../src/pages/checkout.page";
import { ProductsPage } from "../src/pages/products.page";
import { LoginPage } from "../src/pages/login.page";
import { userData } from "../user-data";

describe('Feature Perform an Order', () => {
    let loginPage: LoginPage = new LoginPage();
    let productsPage: ProductsPage =  new ProductsPage();
    //let cartPage: CartPage =  new CartPage();
    let checkoutPage: CheckoutPage = new CheckoutPage();

    beforeAll( async () => {
        await driverInstance.start(userData.browser);
        await loginPage.navigateTo(userData.url);
        await loginPage.Login();        
    }, 20000);

    afterAll(async () => {
        await driverInstance.closeDriver();

    });
    
    test('Select products and Order checkout', async () => {
        await productsPage.addToCartItem('One Plus 6T');
        await productsPage.closeCartbtn();
        await productsPage.addToCartItem('One Plus 7T');

        await productsPage.clickShoppingCartBadge();
        await productsPage.clickCheckoutButton();
        //await driverInstance.Page.click(invetoryPage.shoppingCartBadge);
        //await driverInstance.Page.click(cartPage.checkoutButton);

        await checkoutPage.checkoutInformation('Bryan', 'Felipez','Street Test','State Test', '00000');
        const actualCompleteMessage = await checkoutPage.getCompleteOrderMessage();
        expect(actualCompleteMessage).toBe('Your Order has been successfully placed.');
        const  totalA = await checkoutPage.checkoutTotal();
        console.log(totalA);
        await checkoutPage.clickFinishOrderButton();

    });
});