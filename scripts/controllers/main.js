'use strict';

/**
 * @ngdoc function
 * @name openApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openApp
 */
angular.module('openApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
