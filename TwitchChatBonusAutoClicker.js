var interval = setInterval(a=>document
	.querySelector('[data-test-selector="community-points-summary"]')
	.querySelectorAll('div')
	.forEach((a, i)=>i<5 || a?.click())
	,20000
);
