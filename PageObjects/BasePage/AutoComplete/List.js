"use strict";

class List{
    constructor(parentContainer){
        this.container = (parentContainer) ? parentContainer.$(".c-autocomplete__list.-visible") : $(".c-autocomplete__list.-visible");
    }

    getItemByName(name){
        return this.container.element(by.cssContainingText("li.sb-autocomplete__item", name));
    }

}

module.exports = List;