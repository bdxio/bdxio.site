angular.module('bdxio.app')
    .controller('PeopleController', function($scope, $q, SharedData) {

    $q.when(SharedData.dataLoaded()).then(function(){
        $scope.participantSections = [
            {
                title: "Les speakers",
                anchor: "speakers",
                participants: SharedData.data("speakers")
            },
            {
                title: "L'équipe d'organisation",
                anchor: "orgas",
                participants: SharedData.data("orgas")
            },
            {
                title: "Le jury du CFP",
                anchor: "jury",
                participants: SharedData.data("jurys")
            }
        ];
    }, errorMessage("Cannot load SharedData"));

});
