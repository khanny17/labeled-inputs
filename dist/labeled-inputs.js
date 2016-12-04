angular.module('labeled-inputs', [
    'labeled-text'
]);

angular.module('labeled-text', [])

.directive('labeledText', [function(){
    return {
        replace: true,
        restrict: 'E',
        scope: {
            name: '=',
            model: '='
        },
        template: 
        '<div class="form-group">' +
            '<label for="labeledInput{{name}}" ng-model="name"></label>' +
            '<input type="text"  class="form-control" id="labeledInput{{name}}"' +
                   'placeholder="{{name}}"' +
                   'ng-model="model" />' +
        '</div>'
    };
}]);
