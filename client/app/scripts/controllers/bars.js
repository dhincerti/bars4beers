'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BarsCtrl
 * @description # BarsCtrl Controller of the clientApp
 * @param $scope
 * @param Bars 
 */
angular.module('clientApp').controller('BarsCtrl', function($scope, Bars) {

  $scope.bars = Bars.getList().$object;

});
