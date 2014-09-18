(function(){
  'use strict';

  angular.module('dir-demo', ['ngRoute', 'LocalForageModule', 'mkGreetingModule', 'mkClockModule', 'mkStockModule', 'mkWeatherModule', 'mkMovieModule', 'mkLocateModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'dir-demo', storeName:'cache', version:1.0});
  }]);
})();

