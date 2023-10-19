// drawer //

$( document ).ready ( function ( ) {

	var drawer = $( '#drawer' );

    function show ( ) {

        drawer.removeClass ( 'drawer-hide' );

        setTimeout ( function ( ) {

            drawer.addClass ( 'drawer-show' );

        }, 250 );

    };

    function hide ( ) {

        drawer.removeClass ( 'drawer-show' );

        drawer.addClass ( 'drawer-hide' );

    };

    function toggle ( ) {

        if ( drawer.hasClass ( 'drawer-show' ) ) {

            hide ( );

        }

        else {

            show ( );

        }
    };

    $( '.navigation' ).click ( function ( event ) {

        show ( ) ;

    } );

    $( '#load' ).click ( function ( event ) {

        if ( drawer.hasClass ( 'drawer-show' ) ) {

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
