// load //

function get_page_data(href) {

	$.get(href, parse_data);

}

function parse_data(data) {

	$('#load').empty();

	$('#load').append(data);

}
$(document).ready(function() {

	$('[data-link]').click(function(e) {

		e.preventDefault();

		var link = $(this).data('link');

		get_page_data(link);

		$('#load').css(

			'border-top',

			'10px solid #dddddd'

		);

		$('#drawer').removeClass('drawer-open');

		$('#load').addClass('load-open');

			 $("html, body").animate(

				{ scrollTop: 0 },

				"slow"

			);

		$('#anchors.hidden').show();

	});

});
