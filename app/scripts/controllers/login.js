'use strict';

/**
* @ngdoc function
* @name sbadminTestApp.controller:AboutCtrl
* @description
* # AboutCtrl
* Controller of the sbadminTestApp
*/
angular.module('sbadminTestApp')
.controller('LoginCtrl', function ($scope, $http, $location, $cookieStore) {
	$scope.submit = function(credentials){
		var appid = 'olCKrLaKEACbv4YLE1UUjRzVzRbAfYoatW8SH4S6';
		var apikey = '6l0VJ52yXBxMr28oYEfKz5GHeMpuIcEecFbEQj2P';

		var req = {
			method: 'GET',
			url: 'https://api.parse.com/1/login?username='+credentials.username+'&password='+credentials.password,
			headers: {
				'X-Parse-Application-Id': appid,
				'X-Parse-REST-API-Key': apikey
			}
		};

		$http(req).success(function(data){
			console.log('Success');
			console.log(data.sessionToken);
			$cookieStore.put('sessionToken',data.sessionToken);
			console.log('Cookie: ' + $cookieStore.get('sessionToken'));
			$location.path('/main');

		}).error(function(){
			console.log('Failed');
		});
	};
});
