'use strict';

/**
 * @param $scope 
 * @param $routeParams 
 * @param Bars 
 * @ngdoc function
 * @name clientApp.controller:BarViewCtrl
 * @description # BarViewCtrl Controller of the clientApp
 */
angular.module('clientApp').controller('BarViewCtrl', function($scope, $routeParams, Bars) {
  $scope.viewBar = true;
  $scope.bar = Bars.one($routeParams.id).get().$object;
});
