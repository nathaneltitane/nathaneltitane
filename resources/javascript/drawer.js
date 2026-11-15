// drawer //

$( document ).ready ( function ( ) {

	var drawer = $( '#drawer' );

    function drawer_show ( ) {

        drawer.removeClass ( 'drawer-hide' );

        // overlays vanish while the drawer is open

        $( '#navigation, #top, #bottom' ).addClass ( 'overlay-hide' ) ;

        setTimeout ( function ( ) {

            drawer.addClass ( 'drawer-show' );

        }, 250 );

    };

    function drawer_hide ( ) {

        drawer.removeClass ( 'drawer-show' );

        drawer.addClass ( 'drawer-hide' );

        $( '#navigation, #top, #bottom' ).removeClass ( 'overlay-hide' ) ;

    };

    function drawer_toggle ( ) {

        if ( drawer.hasClass ( 'drawer-show' ) ) {

            drawer_hide ( );

        }

        else {

            drawer_show ( );

        }
    };

    $( '.navigation' ).click ( function ( event ) {

        drawer_show ( ) ;

    } );

    // click or tap on the drawer closes it

    drawer.click ( function ( event ) {

        drawer_hide ( ) ;

    } );

    $( '#load' ).click ( function ( event ) {

        if ( drawer.hasClass ( 'drawer-show' ) ) {

            drawer_hide ( );

        }

    } );

    // keyboard

    $( document ).on ( 'keyup', function ( event ) {

        if ( event.key === 'd' ) {

            drawer_toggle ( );

        }

    } );

} );
