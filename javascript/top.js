// top //

$( document ).ready ( function ( ) {

	var top = $( '.top' );

	var load = $( '.load' );

	top.click ( function ( event ) {

		event.preventDefault ( );

		load.animate ( {

			scrollTop: '0'

		},

		'slow'

		);

		return false;

	} );

} );
