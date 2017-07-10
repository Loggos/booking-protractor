"use strict";

describe('Verify search results on Booking.com', function () {

    let pageObjects = require("../PageObjects"),
        bookingPage = pageObjects.bookingPage,
        searchResultsPage = pageObjects.searchResultsPage,
        searchPanel = bookingPage.searchPanel;

    const DESTINATION = "New York City",
        DETAILED_SELECTION_ITEM = "New York City, New York State";

    beforeAll(() => browser.driver.manage().window().maximize());

    it(`Search accommodations in ${DESTINATION} city for one week and verify all result in table have correct location`, () => {
        bookingPage.navigate()
            .then(() => searchPanel.destination.selectItem(DESTINATION, DETAILED_SELECTION_ITEM))
            .then(() => searchPanel.checkInDate.selectDate(moment().format("MMMM"), moment().date()))
            .then(() => {
                let weekAfter = moment().add("7", "days");
                return searchPanel.checkOutDate.selectDate(weekAfter.format("MMMM"), weekAfter.date())
            })
            .then(() => searchPanel.clickSearch())
            .then(() => searchResultsPage.waitIsLoaded())
            .then(() => searchResultsPage.resultsTable.getProposalItemList().count())
            .then((proposalCount) => {
                logger.info(`Proposals number is - ${proposalCount}`);
                since(`Search result doesn't contains aby proposal`).expect(proposalCount > 0).toBeTruthy()
            })
            .then(() => searchResultsPage.resultsTable.getProposalLocationValueList())
            .then((proposalLocationList) => {
                logger.info(`Locations list is - ${proposalLocationList}`);
                let isContains = _isEveryListElementContainsValue(proposalLocationList, DESTINATION);
                since(`Not every proposed variant is located in ${DESTINATION}Search result doesn't contains aby proposal`).expect(isContains).toBeTruthy()
            })
    });

    function _isEveryListElementContainsValue(list, value){
        return _.every(list, (listElement) => _.includes(listElement, value));
    }

});