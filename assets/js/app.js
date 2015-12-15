'use stric';

var yololoy = angular.module('yololoy', ['ngRoute','ngSails']);

yololoy.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/templates/main.html',
        controller: 'MainCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    });

}]);

yololoy.controller("MainCtrl", ['$scope', '$rootScope', '$sails', function MainCtrl($scope, $rootScope, $sails) {

    console.log('A');

}]);