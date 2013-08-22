'use strict';

/* Controllers */

function MyCtrl1($scope, $location, $cookies, moviesFactory) {
	$scope.movies = moviesFactory.getMovies();
}
//MyCtrl1.$inject = [];

function loginCtrl($scope, $http, $location, $browser, $cookies){
	$scope.login = 0;
	$scope.usernameModel = 'FansWorldUser';
	$scope.passwordModel = 'demo';

	$scope.userData = null;

	$scope.checklogin = function(){
		if($cookies.loginCookie != 'login'){
			$location.path("/login");
		}
	}

	$scope.init = function(){
  		$scope.checklogin();
	}

	$scope.init();

	$scope.login = function(usernameModel,passwordModel){
		$http({method: 'GET', url: '/api/name'}).
		success(function(data, status, headers, config) {
		$scope.userData = data;
		if($scope.userData != null){
			if($scope.userData.name == usernameModel && $scope.userData.passwd == passwordModel){
				var loginCookie = $cookies.loginCookie;
				$cookies.loginCookie = 'login';
				$location.path("/view1");
			}else{
				alert('Username or Password Incorrect!')
			}
		}else{
			alert('Data Error!')
		}
		}).
		error(function(data, status, headers, config) {
		return 0;
		});
	}
}

function MyCtrl2() {
}
MyCtrl2.$inject = [];
