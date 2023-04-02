import { strict } from "assert";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage{

    //Locators
    // private username: string ='#user-name';
    // private password: string ='#password';
    // private loginbutton: string ='#login-button';


    private usernamedropd: string ='#username';
    private username: string ='#react-select-2-option-0-0';
    private passworddropd: string ='#password';
    private password: string ='#react-select-3-option-0-0';
    private loginbutton: string ='#login-btn';

    //private userType='//*[@id="username"]//div[text()="demouser"]';
    private userType= (user: string) =>`//*[@id="username"]//div[text()="${user}"]`;

    constructor(){
        super();
    }


    async Login() {
        await this.driver.Page.click(this.usernamedropd);
        await this.driver.Page.click(this.username);
        await this.driver.Page.click(this.passworddropd);
        await this.driver.Page.click(this.password);
        await this.driver.Page.click(this.loginbutton);
        await this.driver.Page.waitForTimeout(5000);
    }

    async setUsername(){

       await this.driver.Page.click(this.usernamedropd);
       await this.driver.Page.click(this.username);
        
    }
    async setPassword(){

        await this.driver.Page.click(this.passworddropd);
        await this.driver.Page.click(this.password);
        
    }
    async clickButton(){

        await this.driver.Page.click(this.loginbutton);
        
    }
    async clickButtonlogin(text:string){
 
        await this.driver.Page.click(text);
        
    }
    async close() {
        
        await this.driver.Page.close();
     
    }

}
