"use strict";

function addScript(src) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = chrome.runtime.getURL(src);
    (document.body || document.head || document.documentElement).appendChild(script);


}

addScript("dist/gmailJsLoader.js");
addScript("dist/extension.js");
