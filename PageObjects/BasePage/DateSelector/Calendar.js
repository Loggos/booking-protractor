"use strict";

class Calendar{
    constructor(parentContainer){
        this.container = (parentContainer) ? parentContainer.element(by.className("c2-calendar")) : element(by.className("c2-calendar"));
    }

    getMonthTable(month){
        return this.container.element(by.cssContainingText(".c2-month-table", _.capitalize(month)));
    }

    getDate(month, day){
        return this.getMonthTable(month).element(by.cssContainingText("td.c2-day:not(.c2-day-s-disabled) span", day));
    }

    selectDate(month, day){
        logger.info(`Select ${month} ${day}`);
        return this.getDate(month, day).click();
    }
}

module.exports = Calendar;