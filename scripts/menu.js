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
          dmkMainMenu: "=",
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
          scope.getNameOption = function(name, url, hasSubMenu, index) {
            var i, _i, _j, _ref, _ref1, _results;
            scope.dmkNameOption = name;
            scope.dmkUrl = url;
            scope.dmkMainMenu = index;
            if (hasSubMenu) {
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
            } else {
              _results = [];
              for (i = _j = 0, _ref1 = scope.dmkOptions.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
                _results.push(scope.dmkOptions[i].isActive = false);
              }
              return _results;
            }
          };
          scope.getNameDropdown = function(name, url, hasSubMenu, parentIndex, index) {
            var i, _i, _ref;
            scope.dmkNameOption = name;
            scope.dmkUrl = url;
            if (hasSubMenu) {
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
            } else {
              scope.dmkOptions[parentIndex].dropdowns[index].isActive = false;
              return scope.dmkOptions[parentIndex].isActive = false;
            }
          };
          scope.getNameSubOption = function(name, url, parentIndex, index) {
            scope.dmkNameOption = name;
            scope.dmkUrl = url;
            scope.dmkOptions[scope.dmkMainMenu].dropdowns[parentIndex].subOptions[index].isActive = false;
            scope.dmkOptions[scope.dmkMainMenu].dropdowns[parentIndex].isActive = false;
            return scope.dmkOptions[scope.dmkMainMenu].isActive = false;
          };
        }
      };
    }
  ]);
})();
