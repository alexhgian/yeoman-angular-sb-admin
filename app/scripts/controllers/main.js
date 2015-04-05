'use strict';

/**
 * @ngdoc function
 * @name sbadminTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbadminTestApp
 */
angular.module('sbadminTestApp')
  .controller('MainCtrl', function ($scope, $http, $cookieStore) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.events = [];
    $scope.refresh = function(){
        var appid = 'olCKrLaKEACbv4YLE1UUjRzVzRbAfYoatW8SH4S6';
        var apikey = '6l0VJ52yXBxMr28oYEfKz5GHeMpuIcEecFbEQj2P';
        var sessionToken = $cookieStore.get('sessionToken');
        console.log('Session: '+sessionToken);
        var req = {
            method: 'GET',
            url: 'https://api.parse.com/1/classes/Conference',
            headers: {
                'X-Parse-Application-Id': appid,
                'X-Parse-REST-API-Key': apikey,
                'X-Parse-Session-Token': sessionToken
            }
        };

        $http(req).success(function(data){
            console.log('Success');
            console.log(JSON.stringify(data));
            $scope.events=data.results;
        }).error(function(data){
            console.log('Failed');
        });
    };
  });
