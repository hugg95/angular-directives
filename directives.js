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
        template: '<span ng-repeat="item in items">'
                  + '<span>{{item.name}}</span>'
                  + '<input type="checkbox" ng-checked="item.checked" value="item.value" />'
                  + '</div>',
        link: function(scope, eles, attrs) {
            console.log(scope.ngModel);
            scope.items = scope.ngModel;
            var __inArray = function(arr, ele) {
                if (arr.indexOf(ele) === -1) {
                    return false;
                }
                return true;
            };

            // if an item has been checked
            scope.checked = function(value) {
                return __inArray(checkedItems, value);
            };
        }
    }
});
