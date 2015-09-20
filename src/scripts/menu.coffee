do ->
  'use strict'
  angular
    .module('dmk.menu', [])
    .directive('dmkMenu', [ ->
      restrict: 'A'
      templateUrl: '../templates/dmk-menu.html'

      scope:
        dmkOptions: "="
        dmkNameOption: "="
        dmkType: "@"

      link: (scope) ->
        scope.getNameOption = (name, index)->
          scope.dmkNameOption = name

          for i in [0...scope.dmkOptions.length]
            if scope.dmkOptions[i].isActive == true
              if scope.dmkOptions[i].name != name
                scope.dmkOptions[i].isActive = false

          if scope.dmkOptions[index].isActive == true
            scope.dmkOptions[index].isActive = false
          else
            scope.dmkOptions[index].isActive = true

        scope.getNameDropdown = (name, parentIndex, index) ->
          scope.dmkNameOption = name
          for i in [0...scope.dmkOptions[parentIndex].dropdowns.length]
            if scope.dmkOptions[parentIndex].dropdowns[i].isActive == true
              if scope.dmkOptions[parentIndex].dropdowns[i].name != name
                scope.dmkOptions[parentIndex].dropdowns[i].isActive = false

          if scope.dmkOptions[parentIndex].dropdowns[index].isActive == true
            scope.dmkOptions[parentIndex].dropdowns[index].isActive = false
          else
            scope.dmkOptions[parentIndex].dropdowns[index].isActive = true

        scope.getNameSuboption = (name) ->
          scope.dmkNameOption = name

        return


  ])
  return