do ->
  'use strict'
  angular
    .module('dmk.menu', [])
    .directive('dmkMenu', [ ->
      restrict: 'A'
      templateUrl: '/bower_components/dmk-menu/templates/dmk-menu.html'

      scope:
        dmkIcon: "="
        dmkOptions: "="
        dmkMainMenu: "="
        dmkNameOption: "="
        dmkSearchFirst:"="
        dmkSearchSecond:"="
        dmkUrl: "="
        dmkType: "@"

      link: (scope, element, attr) ->
        if scope.dmkSearchFirst == ""
          scope.dmkSearchFirst = false
        if scope.dmkSearchSecond == ""
          scope.dmkSearchSecond = false

        scope.getNameOption = (name, url, hasSubMenu, index)->
          scope.dmkNameOption = name
          scope.dmkUrl = url
          scope.dmkMainMenu = index

          if hasSubMenu
            for i in [0...scope.dmkOptions.length]
              if scope.dmkOptions[i].name != name
                scope.dmkOptions[i].isActive = false
            if scope.dmkOptions[index].isActive == true
              scope.dmkOptions[index].isActive = false
            else
              scope.dmkOptions[index].isActive = true
          else
            for i in [0...scope.dmkOptions.length]
              scope.dmkOptions[i].isActive = false

          scope.$emit('option', name, url)

        scope.getNameDropdown = (name, url, hasSubMenu, parentIndex, index) ->
          scope.dmkNameOption = name
          scope.dmkUrl = url
          if hasSubMenu
            for i in [0...scope.dmkOptions[parentIndex].dropdowns.length]
              if scope.dmkOptions[parentIndex].dropdowns[i].name != name
                scope.dmkOptions[parentIndex].dropdowns[i].isActive = false
            if scope.dmkOptions[parentIndex].dropdowns[index].isActive == true
              scope.dmkOptions[parentIndex].dropdowns[index].isActive = false
            else
              scope.dmkOptions[parentIndex].dropdowns[index].isActive = true
          else
            scope.dmkOptions[parentIndex].dropdowns[index].isActive = false
            scope.dmkOptions[parentIndex].isActive = false
          scope.$emit('dropDown', name, url)

        scope.getNameSubOption = (name, url, parentIndex, index) ->
          scope.dmkNameOption = name
          scope.dmkUrl = url
          scope.dmkOptions[scope.dmkMainMenu]
            .dropdowns[parentIndex]
            .subOptions[index]
            .isActive = false
          scope.dmkOptions[scope.dmkMainMenu]
            .dropdowns[parentIndex]
            .isActive = false
          scope.dmkOptions[scope.dmkMainMenu].isActive = false
          scope.$emit('subOption', name, url)
        return
  ])
  return