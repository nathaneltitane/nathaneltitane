// modules //

$( function ( ) {

	$.get ( '/modules/head.html', function ( data ) {

		$('head' ).append ( data );

	} );

	$.get( '/modules/drawer.html', function ( data ) {

		$( '#drawer' ).append ( data );

	} );

	$.get( '/modules/navigation.html', function ( data ) {

		$( '#navigation' ).append ( data );

	} );

	$.get( '/modules/load.html', function ( data ) {

		$( '#load' ).append ( data );

	} );

	$.get( '/modules/bottom.html', function ( data ) {

		$( '#bottom' ).append ( data );

	} );

	$.get( '/modules/top.html', function ( data ) {

		$( '#top' ).append ( data );

	} );


} );
