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

	function load_show ( ) {

        setTimeout ( function ( ) {

			load.removeClass ( 'hide' );

            load.addClass ( 'show' );

        }, 250 );

		bottom.removeClass ( 'hide' );

		bottom.addClass ( 'show' );

		top.removeClass ( 'hide' );

		top.addClass ( 'show' );

		// overlays get a dark fill over the gallery

		top.addClass ( 'fill' ) ;

		bottom.addClass ( 'fill' ) ;

		$( '.navigation' ).addClass ( 'fill' ) ;

    };

    function load_hide ( ) {

		bottom.removeClass ( 'show' );

		bottom.addClass ( 'hide' );

		top.removeClass ( 'show' );

		top.addClass ( 'hide' );

		load.removeClass ( 'show' );

		load.addClass ( 'hide' );

		top.removeClass ( 'fill' ) ;

		bottom.removeClass ( 'fill' ) ;

		$( '.navigation' ).removeClass ( 'fill' ) ;

	};

	function load_toggle ( ) {

        if ( load.hasClass ( 'show' ) ) {

            load_hide ( );

        }

        else {

			drawer.removeClass ( 'show' );

			drawer.addClass ( 'hide' );

			$( '#navigation, #top, #bottom' ).removeClass ( 'covered' ) ;

			load_show ( );

        }

    };

	$( '[data-link]' ).click ( function ( event ) {

		load_toggle ( );

		var link = $( this ).data ( 'link' );

		setTimeout ( function ( ) {

			page_get ( link );

		}, 250 );

	} );

} );
