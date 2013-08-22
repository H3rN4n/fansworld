'use strict';

/* Controllers */

function MyCtrl1($scope, moviesFactory) {
	$scope.movies = moviesFactory.getMovies();
}
//MyCtrl1.$inject = [];

function loginCtrl($scope, $http, $location){
	$scope.login = 0;
	$scope.usernameModel = 'FansWorldUser';
	$scope.passwordModel = 'demo';

	$scope.userData = null;

	$scope.init = function(){
  		$scope.checklogin();
	}
	$scope.checklogin = function(){
		if($cookies.loginCookie != 'login'){
			$location.path("/login");
		}
	}

	$scope.login = function(usernameModel,passwordModel){
		$http({method: 'GET', url: '/api/name'}).
		success(function(data, status, headers, config) {
		$scope.userData = data;
		if($scope.userData != null){
			if($scope.userData.name == usernameModel && $scope.userData.passwd == passwordModel){
				//var loginCookie = $cookies.loginCookie;
				//$cookies.loginCookie = 'login';
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
