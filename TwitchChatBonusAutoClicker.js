// Older
var interval = setInterval(a=>document
	.querySelector('[data-test-selector="community-points-summary"]')
	.querySelectorAll('div')
	.forEach((a, i)=>i<5 || a?.click())
	,20000
);

// Current June 2021
var interval = setInterval(
	$=>document.querySelector('[data-test-selector="community-points-summary"]')
	.querySelectorAll('div')
	.forEach((a, i)=>i==20 || a?.click())
	,20000
);
