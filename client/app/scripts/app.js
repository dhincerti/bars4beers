'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description # clientApp Main module of the application.
 */
angular.module('clientApp', ['ngRoute', 'restangular']).config(function($routeProvider, RestangularProvider) {

  RestangularProvider.setBaseUrl('http://localhost:3000');

  $routeProvider.when('/', {
    templateUrl : 'views/main.html',
    controller : 'MainCtrl',
    controllerAs : 'main'
  });
  
  // Bars Routes
  $routeProvider.when('/bars', {
    templateUrl : 'views/bars.html',
    controller : 'BarsCtrl',
    controllerAs : 'bars',
  }).when('/bar/add', {
    templateUrl: 'views/bar/add.html',
    controller: 'BarAddCtrl',
    controllerAs: 'addBar',
  }).when('/bar/edit/:id', {
    templateUrl: 'views/bar/edit.html',
    controller: 'BarEditCtrl',
    controllerAs: 'editBar',
  }).when('/bar/delete/:id', {
    templateUrl: 'views/bar/delete.html',
    controller: 'BarDeleteCtrl',
    controllerAs: 'deleteBar',
  }).when('/bar/:id', {
    templateUrl: 'views/bar/view.html',
    controller: 'BarViewCtrl',
    controllerAs: 'viewBar',
  }).otherwise({
    redirectTo : '/'
  });
}).factory('BarsRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id : '_id'
    });
  });
}).factory('Bars', function(BarsRestangular) {
  return BarsRestangular.service('bars');
});
