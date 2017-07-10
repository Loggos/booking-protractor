
module.exports = {
    waitElementIsDisplayed: waitElementIsDisplayed,
    waitElementIsNotDisplayed: waitElementIsNotDisplayed
};

function waitElementIsDisplayed(element, opt_timeout = 10000, opt_message){
    return browser.sleep(500)
        .then(() => browser.wait(() => element.isPresent()
            .then((isPresent) => isPresent ? element.isDisplayed() : protractor.promise.when(isPresent))
            .then((isDisplayed) => isDisplayed), opt_timeout, opt_message))
}

function waitElementIsNotDisplayed(element, opt_timeout = 10000, opt_message){
    return browser.sleep(500)
        .then(() => browser.wait(() => element.isPresent()
            .then((isPresent) => isPresent ?  element.isDisplayed(): protractor.promise.when(isPresent))
            .then((isDisplayed) => !isDisplayed), opt_timeout, opt_message))
}