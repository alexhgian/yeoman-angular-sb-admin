'use strict';

/**
 * @ngdoc function
 * @name sbadminTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sbadminTestApp
 */
angular.module('sbadminTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
