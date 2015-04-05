'use strict';

/**
 * @ngdoc function
 * @name sbadminTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbadminTestApp
 */
angular.module('sbadminTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
