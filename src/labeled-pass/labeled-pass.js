angular.module('labeled-pass', [])

.directive('labeledPass', [function(){
    return {
        replace: true,
        restrict: 'E',
        scope: {
            name: '=',
            model: '='
        },
        template: 
        '<div class="form-group">' +
            '<label for="labeledInput{{name}}">{{name}}</label>' +
            '<input type="password"  class="form-control" id="labeledInput{{name}}"' +
                   'placeholder="{{name}}"' +
                   'ng-model="model" />' +
        '</div>'
    };
}]);
