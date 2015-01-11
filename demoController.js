var demoController = angular.module('demoController', []);

demoController.controller('demoCtrl', ['$scope', function($scope) {
    $scope.items = [
        {name: 'Bash', value: 'bash', valid: true},
        {name: 'BASIC', value: 'basic', valid: true},
        {name: 'C', value: 'c', valid: true},
        {name: 'C++', value: 'c++', valid: true},
        {name: 'C#', value: 'c#', valid: true},
        {name: 'Fantom', value: 'fantom', valid: true},
        {name: 'Delphi', value: 'delphi', valid: true},
        {name: 'GO', value: 'go', valid: true},
        {name: 'Groovy', value: 'groovy', valid: true},
        {name: 'HTML', value: 'html', valid: true},
        {name: 'JAVA', value: 'java', valid: true},
        {name: 'JavaScript', value: 'javascript', valid: true},
        {name: 'PHP', value: 'php', valid: true},
        {name: 'Python', value: 'python', valid: true},
        {name: 'Ruby', value: 'ruby', valid: true},
        {name: 'Lisp', value: 'lisp', valid: true},
        {name: 'Lua', value: 'lua', valid: true},
        {name: 'MATLAB', value: 'matlab', valid: true},
        {name: 'Object-C', value: 'objectc', valid: true},
        {name: 'Perl', value: 'perl', valid: true},
        {name: 'Swift', value: 'swift', valid: true},
        {name: 'SQL', value: 'sql', valid: true},
        {name: 'Visual Basic', value: 'visualbasic', valid: true}
    ];
    $scope.validItems = [];
}]);
