// modules //

$(function() {

	$.get("/modules/head.html", function(data) {

		$("head").append(data);

	});

	$.get("/modules/drawer.html", function(data) {

		$("#drawer").append(data);

	});

	$.get("/modules/anchors.html", function(data) {

		$("#anchor").append(data);

	});

});
