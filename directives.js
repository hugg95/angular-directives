/***********************************************
 *  A staple collection of angular directives  *
 *  @author victor.li                          *
 *  @version 1.0.0                             *
 *  @date 1/11/2015                            *
 *  @license MIT                               *
 *                                             *
 ***********************************************/
'use strict'
var directives = angular.module('directives', []);

/**
 * a checkbox selection directive,
 * suport multiple selection and conditional selection.
 */
directives.directive('vCheckbox', function() {
    return {
        restrict: 'AE',
        replace: false,
        require: 'ngModel',
        scope: {
            ngModel: '=',
            checkedList: '='
        },
        template: '<span ng-repeat="item in checkList">'
                  + '<span>{{item.name}}</span>'
                  + '<input type="checkbox" ng-checked="checked(item);" ng-disabled="!item.valid" ng-click="check(item);" value="item.value" />'
                  + '</div>',
        link: function(scope, eles, attrs) {

            scope.checkList = scope.ngModel;
            var __checkedList = scope.checkedList;

            var __inArray = function(arr, ele) {
                if (arr.indexOf(ele) === -1) {
                    return false;
                }
                return true;
            };

            // if an item has been checked
            scope.checked = function(item) {
                return __inArray(checkedlist, item.value);
            };

            scope.check = function(item) {
                var value = item.value;
                if (__inArray(__checkedList, item)) {

                } else {
                    __checkedList.push(item.value);
                }
            };
        }
    }
});
