// load //

function get_page_data ( href ) {

	$.get ( href, parse_data );

}

function parse_data ( data ) {

	$( '.load' ).empty ( );

	$( '.load' ).append ( data );

}

$( document ).ready ( function ( ) {

	var drawer = $( '#drawer' );

	var load = $( '.load' );

	function show ( ) {

        load.removeClass ( 'load-hide' );

        setTimeout ( function ( ) {

            load.addClass ( 'load-show' );

        }, 250 );

    };

    function hide ( ) {

        load.removeClass ( 'load-show' );

		load.addClass ( 'load-hide' );

    };

	function toggle ( ) {

        if ( load.hasClass ( 'load-show' ) ) {

            hide ( );

        }

        else {

			drawer.removeClass ( 'drawer-show' );

			drawer.addClass ( 'drawer-hide' );

			show ( );

        }

    };

	$( '[data-link]' ).click ( function ( event ) {

		toggle ( );

		var link = $( this ).data ( 'link' );

		setTimeout ( function ( ) {

			get_page_data ( link );

		}, 250 );

	} );

} );
