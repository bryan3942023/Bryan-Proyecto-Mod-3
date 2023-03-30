import { Driver, driverInstance } from "../core/driver";

export abstract class BasePage{
    protected driver:Driver;

    constructor(){
       this.driver = driverInstance;
        //this.driver.startDriver();
    }
    async navigateTo(url: string){
        await this.driver.Page.goto(url,{waitUntil:'networkidle'});
    }

    /*async getUrl() {
        return this.driver.Page.title;
    }*/
}