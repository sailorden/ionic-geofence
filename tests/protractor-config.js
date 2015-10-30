exports.config = {
    framework: "jasmine2",
    seleniumAddress: "http://localhost:4723/wd/hub",
    // seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["integration/*_test.js"],

    capabilities: {
        // automationName: "selendroid",
        platformName: "android",
        platformVersion: "5.1.1",
        deviceName: "TA8830RX4X",
        // avd: "android-5",
        browserName: "",
        autoWebview: true,
        // deviceReadyTimeout: 10,
        //CHANGE THIS TO YOUR ABSOLUTE PATH
        app: "/home/tomasz/dev/js/ionic-geofence/platforms/android/build/outputs/apk/android-debug.apk"
    },
    // capabilities: {
    //     "browserName": "chrome",
    //     "chromeOptions":{
    //         prefs: {
    //             "profile.managed_default_content_settings.geolocation": 1
    //         }
    //     }
    // },
    // baseUrl: "http://localhost:8100",
    baseUrl: "http://10.0.2.2:8000",

    // configuring wd in onPrepare
    // wdBridge helps to bridge wd driver with other selenium clients
    // See https://github.com/sebv/wd-bridge/blob/master/README.md
    onPrepare: function () {
        var wd = require("wd"),
            protractor = require("protractor"),
            wdBridge = require("wd-bridge")(protractor, wd);
        wdBridge.initFromProtractor(exports.config);
        require("babel/register");
    }
};
