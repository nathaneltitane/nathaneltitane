// set random logo //

$( document ).ready ( function ( ) {

	var list_logos = [
		['logo-blue'],
		['logo-green'],
		['logo-purple'],
		['logo-red'],
		['logo-teal']
	];

	var index_logo = Math.floor ( Math.random ( ) * list_logos.length );

	$( '.logo' ).css ( 'background-image', 'url("/resources/logo/' + list_logos[index_logo] + '.svg")' );

} );
