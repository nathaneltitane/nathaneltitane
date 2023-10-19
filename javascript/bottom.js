// bottom //

$( document ).ready ( function ( ) {

	$( '.bottom' ).click ( function ( event ) {

	event.preventDefault();

	var load = $( '.load' );

	load.animate ( {

		scrollTop: load[0].scrollHeight

	}, 'slow' );

	} );

} );
