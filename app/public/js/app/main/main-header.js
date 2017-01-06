define(['appModule'], function (moduleName) {

    angular.module(moduleName)
        .component('mainHeader', {
            templateUrl: "components/main/main-header.html",
            controller: 'MainHeaderCtrl'
        })
        .controller('MainHeaderCtrl', [function () {

            this.userInfo = "User Test";
        }]);
});
