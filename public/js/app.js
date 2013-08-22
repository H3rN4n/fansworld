'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.factories','ngCookies']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partial/1', controller: MyCtrl1});
    $routeProvider.when('/view1/:movieId', {templateUrl: 'partial/2', controller: MyCtrl1});
    $routeProvider.when('/login', {templateUrl: 'partial/3', controller: loginCtrl});
    $routeProvider.otherwise({redirectTo: '/login'});
    $locationProvider.html5Mode(true);
  }]);

/*require(["factories"], function(util) {
//This function is called when scripts/helper/util.js is loaded.
//If util.js calls define(), then this function is not fired until
//util's dependencies have loaded, and the util argument will hold
//the module value for "helper/util".
});*/