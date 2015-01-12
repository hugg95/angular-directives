var demoController = angular.module('demoController', []);

demoController.controller('demoCtrl', ['$scope', function($scope) {
    $scope.items = [
        {name: 'Bash', value: 'bash'},
        {name: 'BASIC', value: 'basic'},
        {name: 'C', value: 'c'},
        {name: 'C++', value: 'c++'},
        {name: 'C#', value: 'c#'},
        {name: 'Fantom', value: 'fantom'},
        {name: 'Delphi', value: 'delphi'},
        {name: 'GO', value: 'go'},
        {name: 'Groovy', value: 'groovy'},
        {name: 'HTML', value: 'html'},
        {name: 'JAVA', value: 'java'},
        {name: 'JavaScript', value: 'javascript'},
        {name: 'PHP', value: 'php'},
        {name: 'Python', value: 'python'},
        {name: 'Ruby', value: 'ruby'},
        {name: 'Lisp', value: 'lisp'},
        {name: 'Lua', value: 'lua'},
        {name: 'MATLAB', value: 'matlab'},
        {name: 'Object-C', value: 'objectc'},
        {name: 'Perl', value: 'perl'},
        {name: 'Swift', value: 'swift'},
        {name: 'SQL', value: 'sql'},
        {name: 'Visual Basic', value: 'visualbasic'}
    ];
    $scope.checkedList = [$scope.items[0], $scope.items[1], $scope.items[2]];
}]);
