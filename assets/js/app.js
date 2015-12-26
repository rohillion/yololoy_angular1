'use stric';

var yololoy = angular.module('yololoy', ['ngResource', 'ngRoute', 'ngSails', 'uiGmapgoogle-maps']);

yololoy.config(['$routeProvider', '$resourceProvider', 'uiGmapGoogleMapApiProvider', function ($routeProvider, $resourceProvider, uiGmapGoogleMapApiProvider) {
    
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'places'
    });

    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $routeProvider.when('/', {
        templateUrl: '/templates/main.html',
        controller: 'MainCtrl'
    }).when('/journey/:journeyId', {
        templateUrl: '/templates/journeys/main-journey.html',
        controller: 'JourneyCtrl'
    }).otherwise({
        redirectTo: '/',
        caseInsensitiveMatch: true
    });

}]).constant({
    API_URL:'/api/v1'
});