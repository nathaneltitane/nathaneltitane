// work in progress //

$(document).ready(function(){
	var interval = 5000;
	var image = $('#workinprogress');
	var url = image.attr('src');

	setInterval(function() {

		// '&unix=' set to counteract URL modifications

		image.attr('src', url + '&unix=' + (new Date).getTime());

	}, interval);
});
