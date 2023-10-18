// load //

function get_page_data ( href ) {

	$.get ( href, parse_data );

}

function parse_data ( data ) {

	$( '.load' ).empty ( );

	$( '.load' ).append ( data );

}

$( document ).ready ( function ( ) {

	$( '[data-link]' ).click ( function ( event ) {

		$( '#drawer' ).removeClass ( 'drawer-show' );

		$( '#drawer' ).addClass ( 'drawer-hide' );

		$( '.load' ).addClass ( 'load-show' );

		var link = $( this ).data ( 'link' );

		get_page_data ( link );

	} );

} );
