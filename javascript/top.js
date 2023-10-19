// top //

$( document ).ready ( function ( ) {

	$( '.top' ).click ( function ( event ) {

		event.preventDefault ( );

		$( '.load' ).animate ( {

			scrollTop: '0'

		},

		'slow'

		);

		return false;

	} );

} );
