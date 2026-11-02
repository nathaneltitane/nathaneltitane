// modules //

$( function ( ) {

	$.get ( '/resources/modules/head.html', function ( data ) {

		$( 'head' ).append ( data );

	} );

	$.get( '/resources/modules/drawer.html', function ( data ) {

		$( '#drawer' ).append ( data );

	} );

	$.get( '/resources/modules/navigation.html', function ( data ) {

		$( '#navigation' ).append ( data );

	} );

	$.get( '/resources/modules/load.html', function ( data ) {

		$( '#load' ).append ( data );

	} );

	$.get( '/resources/modules/bottom.html', function ( data ) {

		$( '#bottom' ).append ( data );

	} );

	$.get( '/resources/modules/top.html', function ( data ) {

		$( '#top' ).append ( data );

	} );

} );
