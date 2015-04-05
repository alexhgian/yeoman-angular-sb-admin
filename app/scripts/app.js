'use strict';

/**
 * @ngdoc overview
 * @name sbadminTestApp
 * @description
 * # sbadminTestApp
 *
 * Main module of the application.
 */
angular
  .module('sbadminTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/session', {
        templateUrl: 'views/session.html',
        controller: 'SessionCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
