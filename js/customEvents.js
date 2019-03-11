$(document).ready(function()
{	
	// Open mailto links in a new tab
	$("a[href^='mailto:']").click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var target = $(this).attr('target');
		window.open(href, target ? target : '_self');
	});
	
	// Force translate
	$("#lang-selector").click(function(e) {
		e.preventDefault();
		var currentLang = $("#lang-selector").html()
		$.translate((currentLang == "fr")? "en" : "fr");
		$("#lang-selector").blur();
	});
});