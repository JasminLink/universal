/*

GPII Acceptance Testing

Copyright 2014 Raising the Floor International

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

/*global require*/

"use strict";
var fluid = require("universal"),
    gpii = fluid.registerNamespace("gpii");

gpii.loadTestingSupport();

var testDefs = [
    {
        name: "Example acceptance test with 'cloudbased' flow manager using gnome keyboard settings",
        userToken: "fm_gnome_keyboard",
        appinfo: encodeURIComponent("{\"OS\":{\"id\":\"linux\"},\"solutions\":[{\"id\":\"org.gnome.desktop.a11y.keyboard\"}]}"),
        expected: {
            "org.gnome.desktop.a11y.keyboard": {
                "slowkeys-delay": 400,
                "slowkeys-enable": true,
                "bouncekeys-delay": 200,
                "mousekeys-enable": true,
                "stickykeys-enable": true,
                "bouncekeys-enable": true,
                "mousekeys-max-speed": 850,
                "mousekeys-init-delay": 120,
                "mousekeys-accel-time": 800
            }
        }
    }
];

module.exports = gpii.test.cloudBased.bootstrap(testDefs, __dirname);