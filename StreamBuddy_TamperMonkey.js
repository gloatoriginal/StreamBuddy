// ==UserScript==
// @name         StreamBuddy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Devin Gloat Baughman
// @include      /^https://www\.(netflix|hulu)\.com//
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let interval = 1000;
    setInterval(function() {
        //hulu start
        if(location.href.includes("hulu.com/watch/")){
            //Hulu Skip Intro
            document.querySelector('[data-testid=player-skip-button]').click()
        }
        if(location.href.includes("netflix.com/watch/")){
            //future netflix stuffs
        }
    }, interval);

    // Your code here...
})();