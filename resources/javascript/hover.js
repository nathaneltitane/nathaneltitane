// hover //

$( document ).ready ( function ( ) {

	var background = $( '#background' ) ;
	var trigger = $( '#trigger-background' ) ;

	// mouse reveals while over the bird square

	trigger.on ( 'mouseenter', function ( ) {

		background.addClass ( 'hover-background' ) ;

	} ) ;

	trigger.on ( 'mouseleave', function ( ) {

		background.removeClass ( 'hover-background' ) ;

	} ) ;

	// touch toggles on each tap

	trigger.on ( 'touchstart', function ( event ) {

		event.preventDefault ( ) ;

		background.toggleClass ( 'hover-background' ) ;

	} ) ;

} ) ;
