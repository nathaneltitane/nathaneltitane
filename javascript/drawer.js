// drawer //

$(document).ready(function() {

	$('.drawer-button').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').toggleClass('drawer-open');

	});

	$('#background').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').removeClass('drawer-open');

	});

		$('#load').click(function(e) {

		// disable defaults prevention for href handling

		// e.preventDefault();

		$('#drawer').removeClass('drawer-open');

	});

});
