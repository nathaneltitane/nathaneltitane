// navigation //

$( document ).ready ( function ( ) {

	var navigation = $( '#navigation' );

	var timer_scroll = null;

	// the gallery loads later, so listen on the document

	document.addEventListener ( 'scroll', function ( event ) {

		if ( ! $( event.target ).is ( '.load' ) ) {

			return ;

		}

		navigation.addClass ( 'navigation-hide' ) ;

		clearTimeout ( timer_scroll ) ;

		// back once scrolling stops

		timer_scroll = setTimeout ( function ( ) {

			navigation.removeClass ( 'navigation-hide' ) ;

		}, 500 ) ;

	}, true ) ;

} ) ;
