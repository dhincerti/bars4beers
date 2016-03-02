var app = angular.module('addBarsApp', []);

app.controller('addBarsController', function($scope) {
  $scope.bars = [];
  $scope.newBar = {
    barName : '',
    adress : '',
    phone : '',
    creationDate : ''
  };

  $scope.post = function() {
    $scope.creationDate = Date.now();
    $scope.bars.push($scope.newBar);
    $scope.newBar = {
      barName : '',
      adress : '',
      phone : '',
    };
  };

});