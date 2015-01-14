'use strict';

/**
 * @ngdoc function
 * @name angularDirectivesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDirectivesApp
 */
angular.module('angularDirectivesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
