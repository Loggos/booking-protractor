"use strict";
let SearchPanel = require("./SearchPanel");

class BasePage{
    constructor(){
        browser.ignoreSynchronization = true;
        this.pageUrl = "https://www.booking.com/";
    }

    get searchPanel(){ return new SearchPanel() }

    navigate(){
        logger.info(`Navigated to ${this.pageUrl} url`);
        return browser.get(this.pageUrl);
    }
}

module.exports = BasePage;