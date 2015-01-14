'use strict';

/**
 * @ngdoc function
 * @name angularDirectivesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDirectivesApp
 */
angular.module('angularDirectivesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
