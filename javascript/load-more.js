// load more //

$(document).ready(function() {
	if ($('.container.hidden').length > 0) {

		$('#load-more').on('click', function (e) {
			e.preventDefault();

			var container = $('.container.hidden').slice(0, 1);
			container.slideDown();
			container.removeClass("hidden");
			$('html,body').animate({
					scrollTop: $('#anchors').offset().top
				},
				'slow');
			if (count == 2) {
				$('#to-top').show();
			}
			if ($('.container.hidden').length == 0) {
				$('#load-more').hide();
			}
		});

	} else {
		// Destroy element when last .container is unhidden
		$('#load-more').remove();
	}
});
