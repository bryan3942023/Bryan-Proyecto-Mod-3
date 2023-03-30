import { driverInstance } from "../src/core/driver";
import { CheckoutPage } from "../src/pages/checkout.page";
import { ProductsPage } from "../src/pages/products.page";
import { LoginPage } from "../src/pages/login.page";
import { userData } from "../user-data";
import { FavouritesPage } from "../src/pages/favourites.page";


describe('Add Favourites and place an order', () => {
    let loginPage: LoginPage = new LoginPage();
    let productsPage: ProductsPage =  new ProductsPage();
    //let cartPage: CartPage =  new CartPage();
    let favourites: FavouritesPage =new FavouritesPage();
    let checkoutPage: CheckoutPage = new CheckoutPage();

    beforeAll( async () => {
        await driverInstance.start(userData.browser);
        await loginPage.navigateTo(userData.url);
        await loginPage.Login();        
    }, 20000);

    afterAll(async () => {
        await driverInstance.closeDriver();

    });
    test('add products to favourites', async () => {
        await productsPage.addItemToFavourites('One Plus 6T');
        await productsPage.addItemToFavourites('One Plus 7T');

    });


    test('Go to Favourites page', async () => {
        await productsPage.clickfavouritesLink();
      
        
      

    });

    test('add products from Favourites page and Order checkout', async () => {  
        await favourites.addToCartItem('One Plus 6T');
        await favourites.closeCartbtn();
        await favourites.addToCartItem('One Plus 7T');

       
       //await favourites.openCart();

        await favourites.clickCheckoutButton();
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