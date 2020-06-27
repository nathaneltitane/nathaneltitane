// drawer trigger //
$(document).ready(function() {
	$('.background').click(function(e) {
		// disable defaults prevention for href handling
		// e.preventDefault();
		$('body').toggleClass('menu-open');
		$('.drawer-trigger').fadeToggle();
	});
});
