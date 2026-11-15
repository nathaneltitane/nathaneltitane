// scroll hide //

$( document ).ready ( function ( ) {

	var navigation = $( '#navigation' ) ;
	var arrow_top = $( '#top' ) ;
	var arrow_bottom = $( '#bottom' ) ;

	var timer_scroll = null ;

	// page opens at the top

	arrow_top.addClass ( 'scroll' ) ;

	// the gallery loads later, so listen on the document

	document.addEventListener ( 'scroll', function ( event ) {

		var load = event.target ;

		if ( ! $( load ).is ( '.load' ) ) {

			return ;

		}

		// arrows show 40% into the scroll from each end

		var range_scroll = Math.max ( load.scrollHeight - load.clientHeight, 1 ) ;
		var progress_scroll = load.scrollTop / range_scroll ;

		arrow_top.toggleClass ( 'scroll', progress_scroll < 0.4 ) ;

		arrow_bottom.toggleClass ( 'scroll', progress_scroll > 0.6 ) ;

		navigation.addClass ( 'scroll' ) ;

		clearTimeout ( timer_scroll ) ;

		// back once scrolling stops

		timer_scroll = setTimeout ( function ( ) {

			navigation.removeClass ( 'scroll' ) ;

		}, 500 ) ;

	}, true ) ;

} ) ;
