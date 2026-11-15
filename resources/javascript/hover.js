// hover //

$( document ).ready ( function ( ) {

	var background = $( '#background' ) ;
	var trigger = $( '#background-trigger' ) ;

	// mouse reveals while over the bird square

	trigger.on ( 'mouseenter', function ( ) {

		background.addClass ( 'background-hover' ) ;

	} ) ;

	trigger.on ( 'mouseleave', function ( ) {

		background.removeClass ( 'background-hover' ) ;

	} ) ;

	// touch toggles on each tap

	trigger.on ( 'touchstart', function ( event ) {

		event.preventDefault ( ) ;

		background.toggleClass ( 'background-hover' ) ;

	} ) ;

} ) ;
