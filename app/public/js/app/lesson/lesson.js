define(['appModule'],function(moduleName) {
    angular.module(moduleName)

        .config(['$stateProvider', function($stateProvider) {
            $stateProvider.state('lesson', {
                url: '/aula',
                templateUrl: 'components/lesson/lesson.html',
                controller: 'LessonController'
            });
        }])

        .controller('LessonController', ['$scope', '$http', function($scope, $http) {
            let self = $scope;
            self.$emit('disableMainMenu', true);
            self.$emit('disableMainHeader', true);
            self.$emit('disableMainFooter', true);

        }]);//Controller

});
