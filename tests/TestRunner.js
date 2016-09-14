require.config({
    paths: {
        "console-runner": "../node_modules/phantom-jasmine/lib/console-runner",
        "jasmine": "../bower_components/jasmine/lib/jasmine-core/jasmine",
        "jasmine-html": "../bower_components/jasmine/lib/jasmine-core/jasmine-html",
        "jquery": "../bower_components/jquery/jquery",
        "jquery.fullcalendar": "../bower_components/fullcalendar/fullcalendar/fullcalendar.min",
        "jquery.fullcalendar.dnd": "../bower_components/fullcalendar/lib/jquery-ui.custom.min",
        "logging": "../bower_components/logging/src/logging",
        "moment": "../bower_components/moment/moment",
        "pat-calendar": "../src/calendar",
        "moment-timezone-data": "../src/moment-timezone-data",
        "pat-compat": "../bower_components/patternslib/src/core/compat",
        "pat-jquery-ext": "../bower_components/patternslib/src/core/jquery-ext",
        "pat-logger": "../bower_components/patternslib/src/core/logger",
        "pat-parser": "../bower_components/patternslib/src/core/parser",
        "pat-registry": "../bower_components/patternslib/src/core/registry",
        "pat-store": "../bower_components/patternslib/src/core/store",
        "pat-utils": "../bower_components/patternslib/src/core/utils"
    },
    shim: {
        "jasmine-html": {
            deps: ["jasmine"],
            exports: "jasmine"
        },
        "jquery": {
            exports: "jQuery"
        },
        "jquery.fullcalendar.dnd": {
            deps: ["jquery"]
        }
    }
});

define("TestRunner", function() {
    require([
        "jasmine-html",
        "logging",
        "pat-calendar"
    ], function(jasmine) {
        require([
            "console-runner",
            "specs/calendar.js"
        ], function() {
            var jasmineEnv = jasmine.getEnv();
            var reporter;
            if (/PhantomJS/.test(navigator.userAgent)) {
                reporter = new jasmine.ConsoleReporter();
                window.console_reporter = reporter;
                jasmineEnv.addReporter(reporter);
                jasmineEnv.updateInterval = 0;
            } else {
                reporter = new jasmine.HtmlReporter();
                jasmineEnv.addReporter(reporter);
                jasmineEnv.specFilter = function(spec) {
                    return reporter.specFilter(spec);
                };
                jasmineEnv.updateInterval = 0; // Make this more to see what's happening
            }
            jasmineEnv.execute();
        });
    });
});
require(["TestRunner"]);
