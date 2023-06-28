// ==UserScript==
// @name				 New Userscript
// @namespace		http://tampermonkey.net/
// @version			0.1
// @description	try to take over the world!
// @author			 You
// @match				https://www.youtube.com/*
// @icon				 data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant				none
// ==/UserScript==

(function() {
	'use strict';
	document.body
	.appendChild(document.createElement("style"))
	.innerHTML=`
ytd-rich-item-renderer{
	width:200px;
	margin:1px;
}
#home-page-skeleton .rich-grid-media-skeleton {
	width: calc((95% / 6 - 4px)) !important;
	min-width: unset !important;
	margin: 0 2px 0 20px!important;
}

ytd-two-column-browse-results-renderer {
	width: var(--ytd-grid-6-columns-width) !important;
}

ytd-rich-grid-renderer {
	padding-left: 30px !important;
	--ytd-rich-grid-items-per-row: 6 !important;
	--ytd-rich-grid-item-margin: 4px !important;
}

#contents > ytd-rich-grid-row,
#contents > ytd-rich-grid-row > #contents {
	display: contents !important;
}

ytd-rich-item-renderer {
	margin-bottom: 24px !important;
}

ytd-rich-item-renderer:first-of-type,
ytd-rich-item-renderer:last-of-type {
	margin-right: 2px !important;
	margin-left: 2px !important;
}

ytd-rich-grid-renderer .ghost-grid.ytd-ghost-grid-renderer {
	margin: 0 !important;
}

ytd-rich-grid-renderer #spinner {
	position: absolute !important;
	bottom: -10px !important;
	left: calc(50% - 14px) !important;
	margin: 0 !important;
}

#details #meta {
	padding-right: 0 !important;
}

#details #meta > h3 {
	padding-right: 24px !important;
}

#video-title.ytd-rich-grid-media {
	font-size: 1.4rem !important;
	line-height: 2rem !important;
}

#text.ytd-channel-name, ytd-video-meta-block[rich-meta] #metadata-line.ytd-video-meta-block {
	font-size: 1.2rem !important;
	line-height: 1.8rem !important;
}

ytd-section-list-renderer[page-subtype="history"] #separator.ytd-video-meta-block:not([hidden]) {
	display: inline-block !important;
	color: var(--yt-spec-text-secondary) !important;
	margin: 0 4px !important;
}
`;
	// Your code here...
})();