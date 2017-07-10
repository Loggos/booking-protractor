"use strict";
let List = require("./List"),
    _container = new WeakMap(),
    commonHelper = require("../../commonHelper");

class AutoComplete{
    constructor(parentContainer){
        _container.set(this,(parentContainer) ? parentContainer.element(by.className("c-autocomplete")) : element(by.className("c-autocomplete")));
    }

    get inputField(){ return _container.get(this).element(by.id("ss")) }
    get list(){ return new List(_container.get(this)) }

    selectItem(itemName, itemToSelect, timeout){
        return this.clear()
            .then(()=> this.typeAndWait(itemName, timeout))
            .then(()=> this._selectFromList(itemToSelect))
    }

    clear() {
        return this.focus()
            .then(() => this.inputField.sendKeys(protractor.Key.BACK_SPACE))
            .then(() => this.inputField.sendKeys(protractor.Key.BACK_SPACE))
    }

    focus(){
        logger.info(`Click input (focus)`);
        return this.inputField.click();
    }

    typeAndWait(searchingText, timeout = 10000){
        return this.focusAndType(searchingText)
            .then(()=>{
                logger.info("Typed and waiting for list");
                return commonHelper.waitElementIsDisplayed(this.list.container, timeout, "Auto complete container didn't become visible within timeout");
            })
    }

    focusAndType(searchingText){
        return this.focus()
            .then(() => this.typeText(searchingText))
    }

    typeText(text) {
        logger.info(`Type text: '${text}' into auto complete`);
        return this.inputField.sendKeys(text);
    }

    _selectFromList(itemName){
        logger.info(`Click item ${itemName} in auto complete list`);
        return this.list.getItemByName(itemName).click();
    }

}

module.exports = AutoComplete;