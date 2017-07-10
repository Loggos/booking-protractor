"use strict";
let ResultsTable = require("./ResultsTable"),
    commonHelper = require("../commonHelper");

class SearchResultsPage{
    constructor(){
        browser.ignoreSynchronization = true;
    }

    get resultsTable(){ return new ResultsTable() }

    waitIsLoaded(){
        return commonHelper.waitElementIsDisplayed(this.resultsTable.container);
    }

}

module.exports = SearchResultsPage;