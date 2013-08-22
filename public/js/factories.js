angular.module('myApp.factories', []).factory('moviesFactory', function ($route, $routeParams) {

    factory={};
    var movies = [
        {'name':'Movie', 'time':25, 'pts':'9/10'},
        {'name':'Movie 2', 'time':53, 'pts':'2/10'},
        {'name':'Movie 3', 'time':35, 'pts':'5/10'},
        {'name':'Movie 4', 'time':78, 'pts':'5/10'},
        {'name':'Movie 5', 'time':123, 'pts':'2/10'},
        {'name':'Movie 6', 'time':4, 'pts':'1/10'},
        {'name':'Movie 7', 'time':56, 'pts':'9/10'},
        {'name':'Movie 8', 'time':22, 'pts':'10/10'},
        {'name':'Movie 9', 'time':29, 'pts':'9/10'}
    ];

    factory.getMovies = function () {
        return movies;
    };

    return factory;
});