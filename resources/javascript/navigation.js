// scroll hide //

$( document ).ready ( function ( ) {

	var navigation = $( '#navigation' ) ;
	var arrow_top = $( '#top' ) ;
	var arrow_bottom = $( '#bottom' ) ;

	var timer_scroll = null ;

	// page opens at the top

	arrow_top.addClass ( 'scroll-hide' ) ;

	// the gallery loads later, so listen on the document

	document.addEventListener ( 'scroll', function ( event ) {

		var load = event.target ;

		if ( ! $( load ).is ( '.load' ) ) {

			return ;

		}

		// each arrow shows at the far end

		var reached_top = load.scrollTop <= 0 ;
		var reached_bottom = load.scrollTop + load.clientHeight >= load.scrollHeight - 1 ;

		arrow_top.toggleClass ( 'scroll-hide', ! reached_bottom ) ;

		arrow_bottom.toggleClass ( 'scroll-hide', ! reached_top ) ;

		navigation.addClass ( 'scroll-hide' ) ;

		clearTimeout ( timer_scroll ) ;

		// back once scrolling stops

		timer_scroll = setTimeout ( function ( ) {

			navigation.removeClass ( 'scroll-hide' ) ;

		}, 500 ) ;

	}, true ) ;

} ) ;
