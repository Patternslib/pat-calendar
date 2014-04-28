({
    baseUrl: ".",
    out: "bundle.js",
    name: "bower_components/almond/almond.js",

    paths: {
        // Externals
        "almond": "bower_components/almond/almond",
        "jquery": "bower_components/jquery/jquery",
        "logging": "bower_components/logging/src/logging",
        "jquery.fullcalendar": "bower_components/fullcalendar/fullcalendar/fullcalendar.min",
        "jquery.fullcalendar.dnd": "bower_components/fullcalendar/lib/jquery-ui.custom.min",
        // Calendar pattern
        "moment": "bower_components/moment/moment",
        "moment-timezone": "bower_components/moment-timezone/moment-timezone",
        "pat-calendar": "src/calendar",
        "pat-calendar-moment-timezone-data": "src/moment-timezone-data"
    },

    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "jquery.fullcalendar.dnd": {
            depends: "jQuery",
        },
    },
    optimize: "none"
})
