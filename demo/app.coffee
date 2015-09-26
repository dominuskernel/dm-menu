do ->
  'use strict'

  LoadDataMenu = ($scope, $http, deviceDetector) ->
    $scope.nameOption = ""
    $scope.whatDevice = deviceDetector.raw.device
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