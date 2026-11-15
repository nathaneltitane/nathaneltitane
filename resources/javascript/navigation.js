// scroll hide //

$( document ).ready ( function ( ) {

	var overlays = $( '#navigation, #top, #bottom' ) ;

	var timer_scroll = null ;

	// the gallery loads later, so listen on the document

	document.addEventListener ( 'scroll', function ( event ) {

		if ( ! $( event.target ).is ( '.load' ) ) {

			return ;

		}

		overlays.addClass ( 'scroll-hide' ) ;

		clearTimeout ( timer_scroll ) ;

		// back once scrolling stops

		timer_scroll = setTimeout ( function ( ) {

			overlays.removeClass ( 'scroll-hide' ) ;

		}, 500 ) ;

	}, true ) ;

} ) ;
