do ->
  'use strict'

  LoadDataMenu = ($scope, $http) ->
    $scope.nameOption = ""
    $http.get('mocks/menu.json').success((data)->
      $scope.dmkOptions = data
      return
    )
    return

  angular
    .module('app',['dmk.menu'])
    .controller('LoadDataMenu', LoadDataMenu)

  LoadDataMenu.$inject = ['$scope','$http']

  return