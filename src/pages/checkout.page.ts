import { BasePage } from "./base.page";
import { shoppingcart } from "./components/shoppingcart.page";

export class CheckoutPage extends BasePage {
    //checkout information Shipping Address
    private firstName: string = '#firstNameInput';
    private lastName: string = '#lastNameInput';
    private addressStreet:string='#addressLine1Input';
    private stateProvince: string='#provinceInput';
    private postalCode: string = '#postCodeInput';
    private continueButton: string = '#checkout-shipping-continue';

    //Checkout receipt pdf
    private linkPdf: string = '#downloadpdf';
    private continueBtn: string = '.continueButtonContainer a button';
    
    //private priceProduct: string= '/div[@class="product"]/div[@class="product-column product-actions"]/div[@class="product-price optimizedCheckout-contentPrimary"]';
    private priceProduct: string= '//div[@class="product-price optimizedCheckout-contentPrimary"]';


    private priceUnitProd = (value: number) =>`(//div[@class='product-price optimizedCheckout-contentPrimary'])[${value}]`;
    


    //private arrayOfpriceProduct =  this.driver.Page.$(this.priceProduct);
    //this.driver.Page.locator('.product-price.optimizedCheckout-contentPrimary')
    //this.driver.Page.locator(this.priceProduct).all();

    //Checkout message successfully placed order 
    //private completeMessage: string = '//legend[@id="confirmation-message"][text()="Your Order has been successfully placed."]';
    private completeMessage: string ='legend#confirmation-message';

    private totalAmount: string ='span.cart-priceItem-value span';
  

    constructor() {
        super();
    }

    async checkoutInformation(firstName: string, lastName: string, addressStreet: string, stateProvince: string, postalCode: string) {
        await this.driver.Page.fill(this.firstName, firstName);
        await this.driver.Page.fill(this.lastName, lastName);
        await this.driver.Page.fill(this.addressStreet, addressStreet);
        await this.driver.Page.fill(this.stateProvince, stateProvince);
        await this.driver.Page.fill(this.postalCode, postalCode);
        await this.driver.Page.click(this.continueButton);
    }

    async clickFinishOrderButton() {
        await this.driver.Page.click(this.continueBtn);
    }

   
    async getCompleteOrderMessage() {
        return await this.driver.Page.innerText(this.completeMessage);
    }
    async checkoutTotal() {
        return await (await this.driver.Page.innerText(this.totalAmount)).replace('$','');
    }
    async donwloadPdfLink(){
        
       /*let download = */ /*await this.driver.Page.click(this.linkPdf);
       const donwloadFile =await this.driver.Page.waitForEvent('download');
       await donwloadFile.saveAs('download.pdf');*/
       const [ download ] = await Promise.all([
        this.driver.Page.waitForEvent('download'), 
        this.driver.Page.click(this.linkPdf)
    ]);
    //download.saveAs('download.pdf');
    
    /*const [ download ] = await Promise.all([
        this.driver.Page.waitForEvent('download'), // wait for download to start
        this.driver.Page.click(this.linkPdf)
    ]);
    // wait for download to complete
    const path = await download.path();
    console.log(path);*/
    
       //download.save_as('C:\Users\Administrador\Downloads');
       await this.driver.Page.waitForTimeout(5000);
    }

    async calculateTotal() {
    let totalSum:number=0;
    let unitPrice:string=''
        const cantProd=await this.driver.Page.locator(this.priceProduct).count();
        for (let index = 1; index <= cantProd; index++) {
        //  console.log(index);
          //await this.driver.Page.innerText(this.priceUnitProd(index));
          //console.log(await (await this.driver.Page.innerText(this.priceUnitProd(index))).replace('$',''));
          unitPrice=await (await this.driver.Page.innerText(this.priceUnitProd(index))).replace('$','');
            totalSum +=Number(unitPrice);
        }
        //console.log(totalSum);  
        return totalSum;
    }

}
