(function() {
  'use strict';
  var LoadDataMenu;
  LoadDataMenu = function($scope, $http, deviceDetector, $mdSidenav, $mdUtil) {
    $scope.nameOption = "";
    $scope.urlOption = "";
    $scope.iconDropdown = "drop-down";
    $http.get('mocks/menu.json').success(function(data) {
      $scope.dmkOptions = data;
    });
    if (deviceDetector.raw.device.android || deviceDetector.raw.device.ipad || deviceDetector.raw.device.iphone || deviceDetector.raw.device.ipod || deviceDetector.raw.device.blackberry || deviceDetector.raw.device.firefoxOs || deviceDetector.raw.device.windowsPhone) {
      $scope.isPortableDevice = true;
    } else {
      $scope.isPortableDevice = false;
    }
    $scope.toggleLeft = function() {
      return $mdSidenav('left').toggle();
    };
    $scope.close = function() {
      return $mdSidenav('left').close();
    };
  };
  angular.module('app', ['dmk.menu', 'ng.deviceDetector', 'ngMaterial']).controller('LoadDataMenu', LoadDataMenu);
  LoadDataMenu.$inject = ['$scope', '$http', 'deviceDetector', '$mdSidenav', '$mdUtil'];
})();
