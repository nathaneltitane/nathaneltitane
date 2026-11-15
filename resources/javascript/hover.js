// hover //

$( document ).ready ( function ( ) {

	var background = $( '#background' ) ;
	var trigger_background = $( '#trigger-background' ) ;

	// mouse reveals while over the bird square

	trigger_background.on ( 'mouseenter', function ( ) {

		background.addClass ( 'background-hover' ) ;

	} ) ;

	trigger_background.on ( 'mouseleave', function ( ) {

		background.removeClass ( 'background-hover' ) ;

	} ) ;

	// touch toggles on each tap

	trigger_background.on ( 'touchstart', function ( event ) {

		event.preventDefault ( ) ;

		background.toggleClass ( 'background-hover' ) ;

	} ) ;

} ) ;
