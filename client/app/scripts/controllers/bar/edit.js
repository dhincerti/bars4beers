'use strict';

/**
 * @param $scope 
 * @param $routeParams 
 * @param Bars 
 * @param $location 
 * @ngdoc function
 * @name clientApp.controller:BarEditCtrl
 * @description # BarEditCtrl Controller of the clientApp
 */
angular.module('clientApp').controller('BarEditCtrl', function($scope, $routeParams, Bars, $location) {
  $scope.editBar = true;
  $scope.bar = {};
  Bars.one($routeParams.id).get().then(function(bar) {
    $scope.bar = bar;
    $scope.saveBar = function() {
      $scope.bar.save().then(function() {
        $location.path('/bar/' + $routeParams.id);
      });
    };
  });

});
