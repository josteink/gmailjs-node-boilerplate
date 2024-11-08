"use strict";

// gmail.js needs to be loaded as early as possible to be able to intercept
// embedded email-data in the gmail HTML!
//
// To do that we:
// - just load it
// - make sure it's initialized
// - and do nothing else!
//
// Let the "big" extension bundle load separately!

const GmailFactory = require("gmail-js");
import $ from "jquery";

if ("trustedTypes" in window) {
    const trustedHTMLpolicy = trustedTypes.createPolicy("default", {
        createHTML: (to_escape) => to_escape,
    });

    $.extend({
        htmlPrefilter: trustedHTMLpolicy.createHTML // this is the actual function which jQuery needs
    });
}

// don't mess up too bad if we have several gmail.js-based
// extensions loaded at the same time!
window._gmailjs = window._gmailjs || new GmailFactory.Gmail($);
