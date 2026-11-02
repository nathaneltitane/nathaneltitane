// bottom //

$( document ).ready ( function ( ) {

	var bottom = $( '.bottom' );

	var load = $( '.load' );

	bottom.click ( function ( event ) {

	event.preventDefault();

	load.animate ( {

		scrollTop: load[0].scrollHeight

	}, 'slow' );

	} );

} );
