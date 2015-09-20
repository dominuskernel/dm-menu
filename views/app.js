(function() {
  'use strict';
  var LoadDataMenu;
  LoadDataMenu = function($scope, $http) {
    $scope.nameOption = "";
    $http.get('mocks/menu.json').success(function(data) {
      $scope.dmkOptions = data;
    });
  };
  angular.module('app', ['dmk.menu']).controller('LoadDataMenu', LoadDataMenu);
  LoadDataMenu.$inject = ['$scope', '$http'];
})();
