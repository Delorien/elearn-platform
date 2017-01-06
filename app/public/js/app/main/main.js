define(['appModule'], function (moduleName) {

    angular.module(moduleName)

        .component('main', {
            templateUrl: "components/main/main.html",
            controller: 'MainCtrl'
        })

        .controller('MainCtrl', ['$scope', function ($scope) {
            let self = $scope;
            
            self.mainMenuHide = false;
            self.$on('disableMainMenu', function (event, data) {
                self.mainMenuHide = data;
            });

            self.mainHeaderHide = false;
            self.$on('disableMainHeader', function (event, data) {
                self.mainHeaderHide = data;
            });

            self.mainFooterHide = false;
            self.$on('disableMainFooter', function (event, data) {
                self.mainFooterHide = data;
            });

        }]);

});
