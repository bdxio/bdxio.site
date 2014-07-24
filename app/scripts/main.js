console.log('Hello Bordeaux !');

angular.module('bdxioModule', [])
.run(function($rootScope, $location, $anchorScroll) {
    $rootScope.scrollTo = function(targetAnchorName) {
        $location.hash(targetAnchorName);
        $anchorScroll();
    };
    $rootScope.genMailTo = function(name) {
        return "mailto:"+name+"@bdx.io";
    };
});
