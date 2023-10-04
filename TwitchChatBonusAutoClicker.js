// current May 2022 using Tampermonkey

// ==UserScript==
// @name         Twitch Autoclicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Francis Carelse
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        none
// ==/UserScript==


(function() {
    'use strict';


    window.TwitchAutoclicker= {
        interval: setInterval(
            $=>window.TwitchAutoclicker.tryClick()
            ,10000
        ),
        tryClick: function(){
            document.querySelector('[data-test-selector="community-points-summary"]')
                .querySelectorAll('div')
                .forEach((a, i)=>i==20 || a?.click());
            // Click to close rewards popup.
            document.querySelectorAll("div.ScPopoverHeaderIconSlot-sc-9cyx3f-1.jOWGtH.tw-popover-header__icon-slot--right button")[1].click();
        },
    };
    console.log('Twitch Autoclicker Activated');

	/*
// Older
var interval = setInterval(a=>document
	.querySelector('[data-test-selector="community-points-summary"]')
	.querySelectorAll('div')
	.forEach((a, i)=>i<5 || a?.click())
	,20000
);

// June 2021
var interval = setInterval(
	$=>document.querySelector('[data-test-selector="community-points-summary"]')
	.querySelectorAll('div')
	.forEach((a, i)=>i==20 || a?.click())
	,20000
);
*/


})();

