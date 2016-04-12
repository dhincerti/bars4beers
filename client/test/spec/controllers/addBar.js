'use strict';

describe('Controller: BarAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var BarAddCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarAddCtrl = $controller('BarAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarAddCtrl.awesomeThings.length).toBe(3);
  });
});
