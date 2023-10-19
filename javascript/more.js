// more //

$( document ).ready ( function ( ) {

	if ( $( '.container.hidden' ).length >= 1 ) {

		var count = 0;

		$( '#more' ).on ( 'click', function ( event ) {

			event.preventDefault ( );

			count += 1;

			var container = $( '.container.hidden' ).slice ( 0, 1 );

			container.slideDown ( );

			container.removeClass ( "hidden" );

			 $( 'html, body' ).animate(

				{ scrollTop: 0 },

				"slow"

			 );

			if ( $( '.container.hidden' ).length == 0 ) {

				$( '#more' ).hide ( );

			}

		} );

	} else {

		// remove element when last .container is unhidden

		$( '#more' ).remove ( );

	}

} );
