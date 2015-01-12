/*******************************************************
 *  A staple collection of angular directives          *
 *  @author victor.li                                  *
 *  @version 1.0.0                                     *
 *  @date 1/11/2015                                    *
 *  @license MIT                                       *
 *                                                     *
 *******************************************************/
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
            checkedList: '=',
            min: '=',
            max: '='
        },
        template: '<div ng-repeat="item in checkList">'
                  + '<span>{{item.name}}</span>'
                  + '<input type="checkbox" ng-checked="checked(item);" ng-disabled="!item.valid" ng-click="check(item);" value="item.value" />'
                  + '</div>',
        link: function(scope, eles, attrs) {

            var __checkedList = scope.checkedList,
                MIN = scope.min ? scope.min : 0,
                MAX = scope.max ? scope.max : 0;
            scope.checkList = [];

            (function() {
                var i = 0, len = scope.ngModel.length;
                for (; i < len; i++) {
                    var item = scope.ngModel[i];
                    item.valid = true;
                    scope.checkList.push(item);
                }
            })();

            // check whether an element is in array
            var __inArray = function(arr, ele) {
                if (arr.indexOf(ele) === -1) {
                    return false;
                }
                return true;
            };

            // remove an element from array
            var __remove = function(arr, ele) {
                if (arr.indexOf(ele) === -1) {
                    return;
                }
                arr.splice(arr.indexOf(ele), 1);
            };

            // check the checked items,
            // make sure the number of checked items limited between MIN and MAX
            var __limit = function() {
                if (__checkedList.length <= 2) {
                    for (i = 0; i < __checkedList.length; i++) {
                        var checked = scope.checkList[scope.checkList.indexOf(__checkedList[i])];
                        checked.valid = false;
                    }
                    __checkedList.limited = true;
                } else if (__checkedList.length >= 8) {
                    for (i = 0; i < scope.checkList.length; i++) {
                        var equals = false;
                        for (var j = 0; j < __checkedList.length; j++) {
                            if (scope.checkList[i] === __checkedList[j]) {
                                equals = true;
                            }
                        }
                        if (!equals) {
                            scope.checkList[i].valid = false;
                        } else {
                            scope.checkList[i].valid = true;
                        }
                    }
                } else {
                    var i = 0, len = scope.checkList.length;
                    for (; i < len; i++) {
                        scope.checkList[i].valid = true;
                    }
                    __checkedList.limited = false;
                }
            };

            // start a limit check immediately after page rendering
            __limit();

            // check whether an item has been checked
            scope.checked = function(item) {
                return __inArray(__checkedList, item);
            };

            scope.check = function(item) {
                if (__inArray(__checkedList, item)) {
                    __remove(__checkedList, item);
                } else {
                    __checkedList.push(item);
                }
                if (MIN || MAX) {
                    __limit();
                }
            };
        }
    }
});
