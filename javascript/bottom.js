// bottom //

$( document ).ready ( function ( ) {

	var count = 0;

	$( '.bottom' ).click ( function ( event ) {

	event.preventDefault();

	var containers = $( '.container' );

	if ( count < containers.length ) {

		containers.eq ( count ).slideDown ( 'slow' );

		count ++;
	}

	var scrollToContainer = containers.eq ( count - 1 );

	$( '.load' ).animate ( {

		scrollTop: scrollToContainer.offset ( ).top

	}, 'slow' );

	} );

} );
