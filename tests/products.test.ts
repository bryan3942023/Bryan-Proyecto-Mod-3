import { setTimeout } from "timers";
import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";
import { ProductsPage } from "../src/pages/products.page";


describe('Inventory Feature', () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    beforeAll( async () => {
        await driverInstance.start();        
        loginPage = new LoginPage();
        await loginPage.navigateTo('https://bstackdemo.com/signin');
        await loginPage.Login();
        productsPage =  new ProductsPage();
    },35000);

    afterAll(async () => {
       
        await driverInstance.closeDriver();
    });

    test('Validate login in Products Page', async () => {        
        // const headerLocator = invetoryPage.inventoryHeader;
        // const isLocatorDisplayed = await driverInstance.isElementDisplayed(headerLocator);
        await driverInstance.Page.waitForTimeout(5000);
        const isLocatorDisplayed = await productsPage.validatelogin();
        expect(isLocatorDisplayed).toBeTruthy();
        //expect(isLocatorDisplayed).not.toBeFalsy();
    }, 35000);

    test('Select Product Items from Inventory', async () => {
        const itemName = 'iPhone XR';
       
        await productsPage.addToCartItem(itemName);
        const isDisplayed = await productsPage.validateRemoveButton(itemName);        
        expect(isDisplayed).not.toBeFalsy();
        await productsPage.closeCartbtn();

    }, 35000);

    test('Shopping Cart Icon updated amount', async () => {        
        await productsPage.addToCartItem('iPhone 11 Pro');
        await productsPage.closeCartbtn();
        await productsPage.addToCartItem('Galaxy S9');
        await productsPage.closeCartbtn();
        await productsPage.addToCartItem('Galaxy Note 20 Ultra');
        await productsPage.closeCartbtn();
        const badge = await productsPage.getShoppingCartBadge();
        expect(badge).toBe("4");
    }, 35000);

});