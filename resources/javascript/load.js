// load //

function page_get ( url_page ) {

	$.get ( url_page, page_insert );

}

function page_insert ( html_page ) {

	$( '.load' ).empty ( );

	$( '.load' ).append ( html_page );

	// new gallery starts at the top

	$( '.load' ).scrollTop ( 0 ) ;

}

$( document ).ready ( function ( ) {

	var drawer = $( '#drawer' );

	var load = $( '.load' );

	var bottom = $( '.bottom' );

	var top = $( '.top' );

	function show ( ) {

        setTimeout ( function ( ) {

			load.removeClass ( 'hide-load' );

            load.addClass ( 'show-load' );

        }, 250 );

		bottom.removeClass ( 'hide-bottom' );

		bottom.addClass ( 'show-bottom' );

		top.removeClass ( 'hide-top' );

		top.addClass ( 'show-top' );

		// overlays get a dark fill over the gallery

		top.addClass ( 'fill-top' ) ;

		bottom.addClass ( 'fill-bottom' ) ;

		$( '.navigation' ).addClass ( 'fill-navigation' ) ;

    };

    function hide ( ) {

		bottom.removeClass ( 'show-bottom' );

		bottom.addClass ( 'hide-bottom' );

		top.removeClass ( 'show-top' );

		top.addClass ( 'hide-top' );

		load.removeClass ( 'show-load' );

		load.addClass ( 'hide-load' );

		top.removeClass ( 'fill-top' ) ;

		bottom.removeClass ( 'fill-bottom' ) ;

		$( '.navigation' ).removeClass ( 'fill-navigation' ) ;

	};

	function toggle ( ) {

        if ( load.hasClass ( 'show-load' ) ) {

            hide ( );

        }

        else {

			drawer.removeClass ( 'show-drawer' );

			drawer.addClass ( 'hide-drawer' );

			show ( );

        }

    };

	$( '[data-link]' ).click ( function ( event ) {

		toggle ( );

		var link = $( this ).data ( 'link' );

		setTimeout ( function ( ) {

			page_get ( link );

		}, 250 );

	} );

} );
