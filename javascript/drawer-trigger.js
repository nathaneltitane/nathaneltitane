// drawer trigger //

$(document).ready(function() {
	$('.background').click(function(e) {
		e.preventDefault();

		$('body').toggleClass('menu-open');
		$('.drawer-trigger').fadeToggle();
	});
});