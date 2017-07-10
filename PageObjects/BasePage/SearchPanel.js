"use strict";
let DatePicker = require("./DateSelector"),
    AutoComplete = require("./AutoComplete");

class SearchPanel{
    constructor(){
        this.container = element(by.id("frm"));
    }

    get destination(){ return new AutoComplete(this.container) }
    get searchButton(){ return this.container.element(by.className("sb-searchbox__button")) }
    get checkInDate(){ return new DatePicker(this.container.element(by.className("--checkin-field"))) }
    get checkOutDate(){ return new DatePicker(this.container.element(by.className("--checkout-field"))) }

    clickSearch(){
        return this.searchButton.click();
    }
}

module.exports = SearchPanel;