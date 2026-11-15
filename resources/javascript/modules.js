// modules //

$( function ( ) {

	$.get( '/resources/modules/drawer.html', function ( html_module ) {

		$( '#drawer' ).append ( html_module );

	} );

	$.get( '/resources/modules/navigation.html', function ( html_module ) {

		$( '#navigation' ).append ( html_module );

	} );

	$.get( '/resources/modules/load.html', function ( html_module ) {

		$( '#load' ).append ( html_module );

	} );

	$.get( '/resources/modules/bottom.html', function ( html_module ) {

		$( '#bottom' ).append ( html_module );

	} );

	$.get( '/resources/modules/top.html', function ( html_module ) {

		$( '#top' ).append ( html_module );

	} );

} );
