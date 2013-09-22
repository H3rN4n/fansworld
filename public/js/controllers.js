'use strict';

/* Controllers */

function MyCtrl1($scope, $location, $cookies, $http, $routeParams, moviesFactory) {
	$scope.movies = moviesFactory.getMovies();

	/*$http.get("/get/"+$routeParams.productId).success(function(data) {
                $scope.record = data;
                //console.log(data);
    });*/
	$scope.initMyCtrl1 = function(){
		
	}

	$scope.openEditor = function(){
		$('.editor').toggleClass('on');
	}

	$scope.save = function(){
		var data = {};
		data = {
		  	'id' : 'id',
		  	'name' : $scope.videoNameModel,
		  	'desc' : $scope.videoDescModel,
		  	'file' : $scope.videoFileModel
		}

		var success = function(data){
			
		}

		$.ajax({
		  type: "POST",
		  url: "/view1",
		  data: data,
		  success: success,
		  dataType: "HTML"
		}).done(function( event,request, settings ) {
 			alert('done');
		});
	}
	/*$scope.checkCompHtml5 = function(){
		window.addEventListener("load", Ready); 
 
		function Ready(){ 
		   if(window.File && window.FileReader){ //These are the relevant HTML5 objects that we are going to use 
		      document.getElementById('UploadButton').addEventListener('click', StartUpload);  
		      document.getElementById('FileBox').addEventListener('change', FileChosen);
		   }
		   else
		   {
		      document.getElementById('UploadArea').innerHTML = "Your Browser Doesn't Support The File API Please Update Your Browser";
		   }
		}
	}

	$scope.checkCompHtml5();*/

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
			var loc = $location.path();
			if(loc == '/login'){
				$location.path("/view1");
			};
		}
	}

	$scope.initLogin = function(){
  		$scope.checklogin();
		$scope.startAutoSuggest();
	}

	$scope.login = function(){
		var data = {};
		data = {
		  	'user' : $scope.usernameModel,
		  	'pswd' : $scope.passwordModel
		}

		var success = function(data){
			//console.log(data);
			/*if(data != null){
				var loginCookie = $cookies.loginCookie;
				$cookies.loginCookie = 'login';
				$location.path("/view1");
			}else{
				alert('Username or Password Incorrect!')
			}*/
		}

		$.ajax({
		  type: "POST",
		  url: "/",
		  data: data,
		  success: success,
		  dataType: "json"
		}).done(function( event,request, settings ) {
 			if(event != null){
				$cookies.loginCookie = 'login';
				$location.path("/view1");
				$('#loginButton').trigger('click');
			}
		}).error(function(){
			smoke.alert('Username or Password Incorrect!');
		});
	}

	$scope.newUser = function(){
		var data = {};
		data = {
		  	'user' : $scope.usernameModel,
		  	'pswd' : $scope.passwordModel
		}

		var success = function(data){
			console.log(data);
		}

		$.ajax({
		  type: "POST",
		  url: "/addNewUser",
		  data: data,
		  success: success,
		  dataType: "json"
		}).done(function( event,request, settings ) {
 			/*console.log(event);
 			console.log(request);*/
		});
	}

	$scope.logout = function(){
		$cookies.loginCookie = 'logout';
		$scope.activeElement = 'off';
	}

	$scope.startAutoSuggest = function(){
		$(".token-input-list, .token-input-dropdown").remove();
		//$("#buscar").tokenInput("http://shell.loopj.com/tokeninput/tvshows.php", {
		$("#buscar").tokenInput("/videolist", {
            onResult: function (results) {

                var cat = "";
                console.log(results);
                //results = results.response;

                $.each(results, function (index, value) {

                    if(cat != value.category){
                        console.log(value.category);
                        value.name = "<div style='background-color:#fff' class="+ value.category +">"+value.category+"</div>"+"<div class="+ value.category +"><img src='" + value.image + "' title='" + value.title + " " + value.last_name + "' height='25px' width='25px' />" + "<div style='display: inline-block; padding-left: 10px; width: 80%;'><div class='full_name'>" + value.name + "</div><div class='email'>" + value.date + "</div></div></div>";
                        cat = value.category;
                    }else{
                        value.name = "<div class="+ value.category +"><img src='" + value.image + "' title='" + value.title + "' height='25px' width='25px' />" + "<div style='display: inline-block; padding-left: 10px; width: 80%;'><div class='full_name'>" + value.title + "</div><div class='email'>" + value.date + "</div></div></div>";
                    }

                });

                return results;
            },
            preventDuplicates: true,
            //searchDelay: 2000,
            minChars: 2,
            tokenLimit: 3
        });
		
		var element = $("#token-input-buscar");
		element.val('Buscar').on('focus', function(event){
			element.val('');
		});
		element.on( "focusout", function(){
			setTimeout(function(){
				element.val('Buscar');	
			},200);
		});
	}

	/*$scope.checklogin();
	$scope.startAutoSuggest();*/
	$scope.initLogin();
}
