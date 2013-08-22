angular.module('myApp.factories', []).factory('moviesFactory', function ($route, $routeParams) {

    factory={};
    var movies = [
        {'id':1,'name':'Movie','desc':'Movie', 'time':25, 'pts':'9/10'},
        {'id':2,'name':'Movie 2','desc':'Movie', 'time':53, 'pts':'2/10'},
        {'id':3,'name':'Movie 3','desc':'Movie', 'time':35, 'pts':'5/10'},
        {'id':4,'name':'Movie 4','desc':'Movie', 'time':78, 'pts':'5/10'},
        {'id':5,'name':'Movie 5','desc':'Movie', 'time':123, 'pts':'2/10'},
        {'id':6,'name':'Movie 6','desc':'Movie', 'time':4, 'pts':'1/10'},
        {'id':7,'name':'Movie 7','desc':'Movie', 'time':56, 'pts':'9/10'},
        {'id':8,'name':'Movie 8','desc':'Movie', 'time':22, 'pts':'10/10'},
        {'id':9,'name':'Movie 9','desc':'Movie', 'time':29, 'pts':'9/10'}
    ];

    factory.getMovies = function () {
        return movies;
    };

    return factory;
});