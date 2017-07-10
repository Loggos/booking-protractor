"use strict";
const ITEM_LOCATOR = '.sr_item';

class ResultsTable{
    constructor(){
        this.container = element(by.id("hotellist_inner"));
    }

    getProposalItemList(){
        return this.container.$$(ITEM_LOCATOR);
    }

    getProposalLocationValueList(){
        return this.container.$$(`${ITEM_LOCATOR}.address`).getText();
    }

}

module.exports = ResultsTable;