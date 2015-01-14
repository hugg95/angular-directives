'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope) {
        // 0: released 1: under development 2: todo
        $scope.items = [
            {name: 'checkbox', value: 'checkbox', status: '1', link: '#/directive'},
            {name: 'auto-tip', value: 'autotip', status: '2', link: '#/auto-tip'}
        ];
  });
