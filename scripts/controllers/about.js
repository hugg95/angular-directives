'use strict';

/**
 * @ngdoc function
 * @name openApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the openApp
 */
angular.module('openApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
