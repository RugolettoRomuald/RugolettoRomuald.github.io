$(document).ready(function(){
	// Stop and reload video on modal close
	$(".portfolio-modal-dismiss").on('click', function(){
		var videos = document.getElementsByTagName("video");
		
		for(var i = 0; i < videos.length; i++) { 
			videos[i].pause();
			videos[i].currentTime = 0;
			videos[i].load();
		}
	});
	
	// Open mailto links in a new tab
	$("a[href^='mailto:']").click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var target = $(this).attr('target');
		window.open(href, target ? target : '_self');
	});
});