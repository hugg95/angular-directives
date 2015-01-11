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
        template: '<div ng-repeat="item in checkList">'
                  + '<span>{{item.name}}</span>'
                  + '<input type="checkbox" ng-checked="checked(item);" ng-disabled="!item.valid" ng-click="check(item);" value="item.value" />'
                  + '</div>',
        link: function(scope, eles, attrs) {

            scope.checkList = scope.ngModel;
            var __checkedList = scope.checkedList;

            // check whether an element is in array
            var __inArray = function(arr, ele) {
                if (arr.indexOf(ele) === -1) {
                    return false;
                }
                return true;
            };

            // remove an element from array
            var __remove = function(arr, ele) {
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
                    var index = [];
                    for (i = 0; i < scope.checkList.length; i++) {
                        for (var j = 0; j < __checkedList.length; j++) {
                            if (scope.) {
                            }
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
                __limit();
                console.log(__checkedList);
            };
        }
    }
});
