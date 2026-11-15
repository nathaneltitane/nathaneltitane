// drawer //

$( document ).ready ( function ( ) {

	var drawer = $( '#drawer' );

    function show ( ) {

        drawer.removeClass ( 'hide-drawer' );

        setTimeout ( function ( ) {

            drawer.addClass ( 'show-drawer' );

        }, 250 );

    };

    function hide ( ) {

        drawer.removeClass ( 'show-drawer' );

        drawer.addClass ( 'hide-drawer' );

    };

    function toggle ( ) {

        if ( drawer.hasClass ( 'show-drawer' ) ) {

            hide ( );

        }

        else {

            show ( );

        }
    };

    $( '.navigation' ).click ( function ( event ) {

        show ( ) ;

    } );

    // click or tap on the drawer closes it

    drawer.click ( function ( event ) {

        hide ( ) ;

    } );

    $( '#load' ).click ( function ( event ) {

        if ( drawer.hasClass ( 'show-drawer' ) ) {

            hide ( );

        }

    } );

    // keyboard

    $( document ).on ( 'keyup', function ( event ) {

        if ( event.key === 'd' ) {

            toggle ( );

        }

    } );

} );
