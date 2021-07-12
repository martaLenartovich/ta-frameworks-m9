"use strict";
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub/',
    framework: "jasmine",
    specs: ["../output_js/specs/scripts.js"],
    splitTestsBetweenCapabilities: true
};
