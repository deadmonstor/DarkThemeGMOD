
var IN_ENGINE = navigator.userAgent.indexOf( "Valve Source Client" ) != -1;
var IS_SPAWN_MENU = false

var App = angular.module( 'MenuApp', [ 'tranny', 'ui' ] );

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
dropDown = function() {
	
	var i = document.getElementById("myDropdown");
	if (i.className == "show"){
		i.className = "hide";
	}else{
		i.className = "show";
	}	
}


App.config(function ( $routeProvider, $locationProvider )
{
	$routeProvider.when('/', { templateUrl: 'template/main.html' } );
	$routeProvider.when('/addons/', { templateUrl: 'template/addon_list.html' } );
	$routeProvider.when('/newgame/', { templateUrl: 'template/newgame.html' } );
	$routeProvider.when('/servers/', { templateUrl: 'template/servers.html' } );
	$routeProvider.when('/demos/', { templateUrl: 'template/demos.html' } );
	$routeProvider.when('/saves/', { templateUrl: 'template/saves.html' } );
} );

function UpdateDigest( scope, timeout )
{
	if ( !scope ) return;
	if ( scope.DigestUpdate ) return;

	scope.DigestUpdate = setTimeout( function ()
	{
		scope.DigestUpdate = 0;
		scope.$digest();

	}, timeout )
}

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
App.filter( 'startFrom', function ()
{
	return function ( input, start )
	{
		start = +start; //parse to int
		return input.slice( start );
	}
} );
