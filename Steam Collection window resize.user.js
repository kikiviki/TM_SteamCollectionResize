// ==UserScript==
// @name         Steam Collection window resize
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Resize the steam collection window so it's not 200px
// @author       https://steamcommunity.com/id/FrankLloydWrong/
// @match        https://steamcommunity.com/sharedfiles/managecollection/*
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    document.getElementById("MySubscribedItems").style.height = "1200px";
})();