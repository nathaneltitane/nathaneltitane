// hover //

$( document ).ready ( function ( ) {

	var background = $( '#background' ) ;

	// mouse reveals while over the bird

	background.on ( 'mouseenter', function ( ) {

		background.addClass ( 'background-hover' ) ;

	} ) ;

	background.on ( 'mouseleave', function ( ) {

		background.removeClass ( 'background-hover' ) ;

	} ) ;

	// touch toggles on each tap

	background.on ( 'touchstart', function ( event ) {

		event.preventDefault ( ) ;

		background.toggleClass ( 'background-hover' ) ;

	} ) ;

} ) ;
