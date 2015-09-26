(function() {
  'use strict';
  angular.module('dmk.menu', []).directive('dmkMenu', [
    function() {
      return {
        restrict: 'A',
        templateUrl: '../templates/dmk-menu.html',
        scope: {
          dmkOptions: "=",
          dmkNameOption: "=",
          dmkIsPortableDevice: "=",
          dmkType: "@"
        },
        link: function(scope) {
          scope.getNameOption = function(name, index) {
            var i, _i, _ref;
            scope.dmkNameOption = name;
            for (i = _i = 0, _ref = scope.dmkOptions.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              if (scope.dmkOptions[i].isActive === true) {
                if (scope.dmkOptions[i].name !== name) {
                  scope.dmkOptions[i].isActive = false;
                }
              }
            }
            if (scope.dmkOptions[index].isActive === true) {
              return scope.dmkOptions[index].isActive = false;
            } else {
              return scope.dmkOptions[index].isActive = true;
            }
          };
          scope.getNameDropdown = function(name, parentIndex, index) {
            var i, _i, _ref;
            scope.dmkNameOption = name;
            for (i = _i = 0, _ref = scope.dmkOptions[parentIndex].dropdowns.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
              if (scope.dmkOptions[parentIndex].dropdowns[i].isActive === true) {
                if (scope.dmkOptions[parentIndex].dropdowns[i].name !== name) {
                  scope.dmkOptions[parentIndex].dropdowns[i].isActive = false;
                }
              }
            }
            if (scope.dmkOptions[parentIndex].dropdowns[index].isActive === true) {
              return scope.dmkOptions[parentIndex].dropdowns[index].isActive = false;
            } else {
              return scope.dmkOptions[parentIndex].dropdowns[index].isActive = true;
            }
          };
          scope.getNameSuboption = function(name) {
            return scope.dmkNameOption = name;
          };
        }
      };
    }
  ]);
})();
