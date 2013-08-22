'use strict';

/* Controllers */

function MyCtrl1($scope, $location, $cookies, $http, $routeParams, moviesFactory) {
	$scope.movies = moviesFactory.getMovies();

	$http.get("/get/"+$routeParams.productId).success(function(data) {
                $scope.record = data;
                console.log(data);
    });
	
	$scope.openEditor = function(){
		$('.editor').toggleClass('on');
	}
}

function loginCtrl($scope, $http, $location, $browser, $cookies){
	$scope.login = 0;
	$scope.usernameModel = 'FansWorldUser';
	$scope.passwordModel = 'demo';
	$scope.activeElement;

	$scope.userData = null;

	$scope.checklogin = function(){
		if($cookies.loginCookie != 'login'){
			$('.navbar-nav>li a').css('display','none');
			$location.path("/login");
		}else{
			$scope.activeElement = 'on';
			$('.navbar-nav>li a').css('display','block');
			$location.path("/view1");
		}
	}

	$scope.init = function(){
  		$scope.checklogin();
	}

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

	$scope.logout = function(){
		$cookies.loginCookie = 'logout';
		$scope.activeElement = 'off';
	}

	$scope.checklogin();
}
