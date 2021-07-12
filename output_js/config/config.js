"use strict";
exports.config = {
    // launch locally when fields directConnect and seleniumAddress are not provided
    chromeDriver: "./specs/driver/chromedriver.exe",
    specs: ["../output_js/specs/scripts.js"],
    capabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
            w3c: false
        }
    },
    chromeOptions: {
        args: [
            //"–headless",
            "–disable-gpu",
            "–window-size=800×600",
        ]
    },
    onPrepare: function () {
        yield browser.manage().timeouts().pageLoadTimeout(20000);
        yield browser.manage().timeouts().implicitlyWait(40000);
        // logger.debug("User connected from " + (await browser.getCapabilities()).get('browserName'));
        browser.getBrowserName = function () {
            return browser.getCapabilities().then(function (caps) {
                browser.browserName = caps.get("browserName");
            });
        };
        browser.getBrowserName();
    }
};
