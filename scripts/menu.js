(function() {
  'use strict';
  angular.module('dmk.menu', []).directive('dmkMenu', [
    function() {
      return {
        restrict: 'A',
        templateUrl: '/bower_components/dmk-menu/templates/dmk-menu.html',
        scope: {
          dmkIcon: "=",
          dmkOptions: "=",
          dmkNameOption: "=",
          dmkSearchFirst: "=",
          dmkSearchSecond: "=",
          dmkUrl: "=",
          dmkType: "@"
        },
        link: function(scope, element, attr) {
          if (scope.dmkSearchFirst === "") {
            scope.dmkSearchFirst = false;
          }
          if (scope.dmkSearchSecond === "") {
            scope.dmkSearchSecond = false;
          }
          scope.getNameOption = function(name, url, index) {
            var i, _i, _ref;
            scope.dmkNameOption = name;
            scope.dmkUrl = url;
            for (i = _i = 0, _ref = scope.dmkOptions.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              if (scope.dmkOptions[i].name !== name) {
                scope.dmkOptions[i].isActive = false;
              }
            }
            if (scope.dmkOptions[index].isActive === true) {
              return scope.dmkOptions[index].isActive = false;
            } else {
              return scope.dmkOptions[index].isActive = true;
            }
          };
          scope.getNameDropdown = function(name, url, parentIndex, index) {
            var i, _i, _ref;
            scope.dmkNameOption = name;
            scope.dmkUrl = url;
            for (i = _i = 0, _ref = scope.dmkOptions[parentIndex].dropdowns.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              if (scope.dmkOptions[parentIndex].dropdowns[i].name !== name) {
                scope.dmkOptions[parentIndex].dropdowns[i].isActive = false;
              }
            }
            if (scope.dmkOptions[parentIndex].dropdowns[index].isActive === true) {
              return scope.dmkOptions[parentIndex].dropdowns[index].isActive = false;
            } else {
              return scope.dmkOptions[parentIndex].dropdowns[index].isActive = true;
            }
          };
          scope.getNameSuboption = function(name, url) {
            scope.dmkNameOption = name;
            return scope.dmkUrl = url;
          };
        }
      };
    }
  ]);
})();
