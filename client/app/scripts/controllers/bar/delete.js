'use strict';

/**
 * @param $scope 
 * @param $routeParams 
 * @param Bars 
 * @param $location 
 * @ngdoc function
 * @name clientApp.controller:BarDeleteCtrl
 * @description # BarDeleteCtrl Controller of the clientApp
 */
angular.module('clientApp').controller('BarDeleteCtrl', function($scope, $routeParams, Bars, $location) {
  $scope.bar = Bars.one($routeParams.id).get().$object;
  
  $scope.delBar = function() {
    $scope.bar.remove().then(function(){
      $scope.back();
    });
  };
  
  $scope.back = function() {
    $location.path('/bars');
  };
});
