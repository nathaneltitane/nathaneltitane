// drawer //

$( document ).ready ( function ( ) {

	var drawer = $( '#drawer' );

    function drawer_show ( ) {

        drawer.removeClass ( 'hide' );

        // overlays vanish while the drawer is open

        $( '#navigation, #top, #bottom' ).addClass ( 'covered' ) ;

        setTimeout ( function ( ) {

            drawer.addClass ( 'show' );

        }, 250 );

    };

    function drawer_hide ( ) {

        drawer.removeClass ( 'show' );

        drawer.addClass ( 'hide' );

        $( '#navigation, #top, #bottom' ).removeClass ( 'covered' ) ;

    };

    function drawer_toggle ( ) {

        if ( drawer.hasClass ( 'show' ) ) {

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

        if ( drawer.hasClass ( 'show' ) ) {

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
