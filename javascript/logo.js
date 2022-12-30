// set random logo //

$(document).ready(function() {

	var logo_array = [

		['logo-blue'],

		['logo-green'],

		['logo-purple'],

		['logo-red'],

		['logo-teal']

	];

	var index = Math.floor(Math.random() * logo_array.length);

	$('.logo').css('background-image', 'url("/logo/' + logo_array[index] + '.svg")');

});
