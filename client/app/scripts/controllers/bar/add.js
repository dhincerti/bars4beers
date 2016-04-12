'use strict';

/**
 * @param $scope 
 * @param Bars 
 * @param $location 
 * @ngdoc function
 * @name clientApp.controller:BarAddCtrl
 * @description # BarAddCtrl Controller of the clientApp
 */
angular.module('clientApp').controller('BarAddCtrl', function($scope, Bars, $location) {
  $scope.bar = {};
  $scope.saveBar = function() {
    Bars.post($scope.bar).then(function(bar) {
      $location.path('/bar/' + bar._id);
    });
  };
});
