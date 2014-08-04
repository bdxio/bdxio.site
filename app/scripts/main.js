console.log('Hello Bordeaux !');

var bdxioModule = angular.module('bdxioModule', ['ngRoute', 'bdxioControllers']);

bdxioModule.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'templates/pages/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/home'
        })
});

bdxioModule.run(function($rootScope, $location, $anchorScroll, $timeout) {
    $rootScope.goto = function(path, targetAnchorName) {
        $location.path(path);

        if(targetAnchorName) {
            $location.hash(targetAnchorName);
            $anchorScroll();

            // Hackish here... allows to anchorscroll and take into consideration menu header
            // because of https://github.com/angular/angular.js/issues/2070
            $timeout(function(){
                var bodyPaddingTop = $("body").css("padding-top");
                scrollBy(0, -parseInt(bodyPaddingTop, 10));
            }, 100);
        } else {
            $location.hash("");
        }
    };
    $rootScope.genMailTo = function(name) {
        return "mailto:"+name+"@bdx.io";
    };
});
