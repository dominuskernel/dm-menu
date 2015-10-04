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
          dmkUrl: "=",
          dmkType: "@"
        },
        link: function(scope, element, attr) {
          scope.getNameOption = function(name, url, index) {
            var i, _i, _j, _len, _ref, _ref1, _results;
            scope.dmkNameOption = name;
            scope.dmkUrl = url;
            _ref1 = (function() {
              _results = [];
              for (var _j = 0, _ref = scope.dmkOptions.length; 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results.push(_j); }
              return _results;
            }).apply(this) || scope.dmkOptions[i].isActive === true;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              i = _ref1[_i];
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
            var i, _i, _j, _len, _ref, _ref1, _results;
            scope.dmkNameOption = name;
            scope.dmkUrl = url;
            _ref1 = (function() {
              _results = [];
              for (var _j = 0, _ref = scope.dmkOptions[parentIndex].dropdowns.length; 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--){ _results.push(_j); }
              return _results;
            }).apply(this) || scope.dmkOptions[parentIndex].dropdowns[i].isActive === true;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              i = _ref1[_i];
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
