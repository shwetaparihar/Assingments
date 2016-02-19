var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Home.html',
            controller: 'mainController'
        })
        .when('/register', {
            templateUrl: 'register.html',
            controller: 'registerController'
        })
        .when('/GoogleServices', {
            templateUrl: 'GoogleServices.html',
            controller: 'GoogleServiceController'
        });

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'home';
});

animateApp.controller('registerController', function($scope) {
    $scope.pageClass = 'register';
});

animateApp.controller('googleServiceController', function($scope) {
    $scope.pageClass = 'GoogleServices';
});