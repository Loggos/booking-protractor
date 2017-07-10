
exports.config = {

    specs: [
        "../Tests/SearchTest.js"
    ],

    // Patterns to exclude.
    exclude: [],

    // -------------------------------------------------------------------
    // ----- Browsers Set Up----------------------------------------------
    // -------------------------------------------------------------------

    //seleniumArgs: ['-Dwebdriver.ie.driver='+utils.file.getDriverPath(".\\node_modules", "IEDriverServer*.exe")],

    //For Protractor 4 version
    useAllAngular2AppRoots: false,

    chromeOnly: true,

    directConnect : true,

    capabilities : {
        browserName : 'chrome',
        requireWindowFocus : true,
        platform : 'ANY',
        chromeOptions: {
            // Get rid of --ignore-certificate yellow warning
            args: ['--lang=EN', '--disable-extensions'],

            // Set download path and avoid prompting for download even though
            // this is already the default on Chrome but for completeness
            prefs: {
                download: {
                    prompt_for_download: false
                }
            }
        },
        shardTestFiles : true,
        maxInstances: 20
    },
    maxSessions: 1,

    // ---------------------------------------------------------------------------
    // ----- Global Tests information ---------------------------------------------
    // ---------------------------------------------------------------------------

    allScriptsTimeout: 900000,

    getPageTimeout: 30000,

    onPrepare: function() {
        require('./onPrepare')();

        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },

    onComplete: function() {
        // At this point, tests will be done but global objects will still be
        // available.
    },

    onCleanUp: function(exitCode) {},

    // ---------------------------------------------------------------------------
    // ----- The Tests framework --------------------------------------------------
    // ---------------------------------------------------------------------------

    framework: 'jasmine2',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a Tests fails.
        defaultTimeoutInterval: 660000,
        //Remove periods from console log
        print: function() {}
    }
};