import { BasePage } from "./base.page";

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
    private continueBtn: string = '.continueButtonContainer a button'
    

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
        return await this.driver.Page.innerText(this.totalAmount);
    }
}
