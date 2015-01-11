var demoController = angular.module('demoController', []);

demoController.controller('demoCtrl', ['$scope', function($scope) {
    $scope.items = [
        {name: 'Bash', value: 'bash', checked: false},
        {name: 'BASIC', value: 'basic', checked: false},
        {name: 'C', value: 'c', checked: false},
        {name: 'C++', value: 'c++', checked: false},
        {name: 'C#', value: 'c#', checked: false},
        {name: 'Fantom', value: 'fantom', checked: false},
        {name: 'Delphi', value: 'delphi', checked: false},
        {name: 'GO', value: 'go', checked: false},
        {name: 'Groovy', value: 'groovy', checked: false},
        {name: 'HTML', value: 'html', checked: false},
        {name: 'JAVA', value: 'java', checked: false},
        {name: 'JavaScript', value: 'javascript', checked: false},
        {name: 'PHP', value: 'php', checked: false},
        {name: 'Python', value: 'python', checked: false},
        {name: 'Ruby', value: 'ruby', checked: false},
        {name: 'Lisp', value: 'lisp', checked: false},
        {name: 'Lua', value: 'lua', checked: false},
        {name: 'MATLAB', value: 'matlab', checked: false},
        {name: 'Object-C', value: 'objectc', checked: false},
        {name: 'Perl', value: 'perl', checked: false},
        {name: 'Swift', value: 'swift', checked: false},
        {name: 'SQL', value: 'sql', checked: false},
        {name: 'Visual Basic', value: 'visualbasic', checked: false}
    ];
    $scope.checkedItems = [];
}]);
