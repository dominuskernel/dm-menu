do ->
  'use strict'

  LoadDataMenu = ($scope, $http, deviceDetector) ->
    $scope.optionName = ""
    $scope.urlOption = ""
    $scope.iconDropdown = "drop-down"
    $scope.search1 = true
    $scope.search2 = true
    $scope.toggeMenu = false

    $scope.$on('option',(event, name, url)->
      $scope.optionName = name
      $scope.urlOption = url
      console.log($scope.optionName)
      console.log($scope.urlOption)
    )

    $scope.$on('dropDown',(event, name, url)->
      $scope.optionName = name
      $scope.urlOption = url
      console.log($scope.optionName)
      console.log($scope.urlOption)
    )

    $scope.$on('subOption',(event, name, url)->
      $scope.optionName = name
      $scope.urlOption = url
      console.log($scope.optionName)
      console.log($scope.urlOption)
    )

    $http.get('mocks/menu.json').success((data)->
      $scope.dmkOptions = data
      return
    )
    if deviceDetector.raw.device.android or
      deviceDetector.raw.device.ipad or
      deviceDetector.raw.device.iphone or
      deviceDetector.raw.device.ipod or
      deviceDetector.raw.device.blackberry or
      deviceDetector.raw.device.firefoxOs or
      deviceDetector.raw.device.windowsPhone
        $scope.isPortableDevice = true
    else
      $scope.isPortableDevice = false
    return

  angular
    .module('app',['dmk.menu','ng.deviceDetector'])
    .controller('LoadDataMenu', LoadDataMenu)

  LoadDataMenu.$inject = ['$scope','$http', 'deviceDetector']

  return