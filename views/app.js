(function() {
  'use strict';
  var LoadDataMenu;
  LoadDataMenu = function($scope, $http, deviceDetector) {
    $scope.nameOption = "";
    $scope.whatDevice = deviceDetector.raw.device;
    $http.get('mocks/menu.json').success(function(data) {
      $scope.dmkOptions = data;
    });
    if (deviceDetector.raw.device.android || deviceDetector.raw.device.ipad || deviceDetector.raw.device.iphone || deviceDetector.raw.device.ipod || deviceDetector.raw.device.blackberry || deviceDetector.raw.device.firefoxOs || deviceDetector.raw.device.windowsPhone) {
      $scope.isPortableDevice = true;
    } else {
      $scope.isPortableDevice = false;
    }
  };
  angular.module('app', ['dmk.menu', 'ng.deviceDetector']).controller('LoadDataMenu', LoadDataMenu);
  LoadDataMenu.$inject = ['$scope', '$http', 'deviceDetector'];
})();
