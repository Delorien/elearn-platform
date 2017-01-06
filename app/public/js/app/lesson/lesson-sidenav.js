define(['appModule'], function (moduleName) {

    angular.module(moduleName)
        .component('lessonSidenav', {
            templateUrl: "components/lesson/lesson-sidenav.html",
            controller: 'LessonSidenav'
        })

        .controller('LessonSidenav', ['$scope', '$http', function ($scope, $http) {
            let self = $scope;
            let sidenavOpen = true;

            self.performSidenav = function () {
                if (sidenavOpen) {
                    document.getElementById("lesson_sidenav").style.width = "65px";
                    document.getElementById("lesson_sidenav_body").style.display = "none";
                    document.getElementById("lesson_main").style.marginLeft = "65px";
                    sidenavOpen = false;
                } else {
                    document.getElementById("lesson_sidenav").style.width = "250px";
                    document.getElementById("lesson_sidenav_body").style.display = "block";
                    document.getElementById("lesson_main").style.marginLeft = "250px";
                    sidenavOpen = true;
                }
            };

        }]);//Controller
});
