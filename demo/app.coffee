do ->
  'use strict'

  LoadDataMenu = ($scope, $http, deviceDetector, $mdSidenav, $mdUtil) ->
    $scope.nameOption = ""
    $scope.urlOption = ""
    $scope.iconDropdown = "drop-down"
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
    $scope.toggleLeft = ()->
      $mdSidenav('left')
      .toggle()
    $scope.close = () ->
      $mdSidenav('left')
      .close()
    return

  angular
    .module('app',['dmk.menu','ng.deviceDetector','ngMaterial'])
    .controller('LoadDataMenu', LoadDataMenu)

  LoadDataMenu.$inject = ['$scope','$http', 'deviceDetector',
                          '$mdSidenav', '$mdUtil']

  return