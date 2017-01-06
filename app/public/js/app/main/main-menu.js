define(['appModule'],function(moduleName) {

    angular.module(moduleName)
        .component('mainMenu', {
            templateUrl: "components/main/main-menu.html",
            controller: 'MainMenuCtrl'  
        })

        .controller('MainMenuCtrl', ['$scope', function($scope) {
            
        }]);
});
