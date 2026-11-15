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

			load.removeClass ( 'load-hide' );

            load.addClass ( 'load-show' );

        }, 250 );

		bottom.removeClass ( 'bottom-hide' );

		bottom.addClass ( 'bottom-show' );

		top.removeClass ( 'top-hide' );

		top.addClass ( 'top-show' );

		// overlays get a dark fill over the gallery

		top.addClass ( 'top-fill' ) ;

		bottom.addClass ( 'bottom-fill' ) ;

		$( '.navigation' ).addClass ( 'navigation-fill' ) ;

    };

    function load_hide ( ) {

		bottom.removeClass ( 'bottom-show' );

		bottom.addClass ( 'bottom-hide' );

		top.removeClass ( 'top-show' );

		top.addClass ( 'top-hide' );

		load.removeClass ( 'load-show' );

		load.addClass ( 'load-hide' );

		top.removeClass ( 'top-fill' ) ;

		bottom.removeClass ( 'bottom-fill' ) ;

		$( '.navigation' ).removeClass ( 'navigation-fill' ) ;

	};

	function load_toggle ( ) {

        if ( load.hasClass ( 'load-show' ) ) {

            load_hide ( );

        }

        else {

			drawer.removeClass ( 'drawer-show' );

			drawer.addClass ( 'drawer-hide' );

			$( '#navigation, #top, #bottom' ).removeClass ( 'overlay-hide' ) ;

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
