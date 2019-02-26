function stopVideos(){
	var videos = document.getElementsByTagName("video");
	
	for(var i = 0; i < videos.length; i++) { 
		videos[i].pause();
		videos[i].currentTime = 0;
		videos[i].load();
	}
}

$(document).ready(function(){
	$(".portfolio-modal-dismiss").on('click', function(){
		stopVideos();
	});
});