angular.module('bdxio.app')
    .controller('PartnersController', function($q, $scope, SharedData, $sce) {

    $q.when(SharedData.dataLoaded()).then(function(){
        var partnersInfos = SharedData.data("partners");
        _([partnersInfos.gold, partnersInfos.silver, partnersInfos.bronze]).pluck("companies").flatten().each(function(company){
            company.description = $sce.trustAsHtml(company.description);
        });
        $scope.partnerLevels = [
            _.extend({ title: "Gold", anchorId: "gold" }, partnersInfos.gold),
            _.extend({ title: "Silver", anchorId: "silver" }, partnersInfos.silver),
            _.extend({ title: "Bronze", anchorId: "bronze" }, partnersInfos.bronze)
        ];

        $scope.friends = SharedData.data("friends");
    }, errorMessage("Cannot load SharedData"));

    $scope.noActivePartner = function(partnerLevel) {
        return partnerLevel.activeCount==0;
    };

    $scope.someInactivePartnersComing = function(partnerLevel) {
        return partnerLevel.activeCount!=0 && partnerLevel.inactiveCount!=0;
    }
});
