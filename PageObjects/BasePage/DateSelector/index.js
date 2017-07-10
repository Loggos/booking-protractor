"use strict";
let Calendar = require("./Calendar"),
    _container = new WeakMap(),
    commonHelper = require("../../commonHelper");

class DatePicker{
    constructor(parentContainer){
        _container.set(this,(parentContainer) ? parentContainer.element(by.className("sb-date-field__wrapper")) : element(by.className("sb-date-field__wrapper")));
    }

    get dateField(){ return _container.get(this).element(by.className("sb-searchbox__input")) }
    get calendar(){ return new Calendar(_container.get(this)) }

    clickDateField(){
        return this.dateField.click();
    }

    expandCalendar(){
        return this.calendar.container.isPresent()
            .then((isDisplayed) => {
                if(!isDisplayed){
                    return this.clickDateField();
                }
            })
    }

    selectDate(month, day){
        return this.expandCalendar()
            .then(() => commonHelper.waitElementIsDisplayed(this.calendar.container))
            .then(() => this.calendar.selectDate(month, day))
            .then(() => commonHelper.waitElementIsNotDisplayed(this.calendar.container))
    }
}

module.exports = DatePicker;