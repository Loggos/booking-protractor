module.exports = function() {

    global.moment = require('moment');
    global._ = require('lodash');
    require('jasmine2-custom-message');
    let log4js = require('log4js');
    global.logger = log4js.getLogger();

};
