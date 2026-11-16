// hover //

$( document ).ready ( function ( ) {

	var background = $( '#background' ) ;
	var trigger_background = $( '#background .trigger' ) ;

	// mouse reveals while over the bird square

	trigger_background.on ( 'mouseenter', function ( ) {

		background.addClass ( 'hover' ) ;

	} ) ;

	// leaving hides the text

	trigger_background.on ( 'mouseleave', function ( ) {

		background.removeClass ( 'hover' ) ;

	} ) ;

	// touch toggles on each tap

	trigger_background.on ( 'touchstart', function ( event ) {

		event.preventDefault ( ) ;

		background.toggleClass ( 'hover' ) ;

	} ) ;

} ) ;
