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
  }).when('/bars', {
    templateUrl : 'views/bars.html',
    controller : 'BarsCtrl',
    controllerAs : 'bars'
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
