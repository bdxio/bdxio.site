/* global angular */
'use strict';

var bdxioControllers = angular.module('bdxioControllers', []);

bdxioControllers.controller('HomeController', function($scope, $q, SharedData){
    $scope.themes = [
        {
            className: 'coding',
            hints: [
                'Langages',
                'Frameworks',
                'Tooling'
            ],
            detailedHints: [
                'Java, PHP, C#, Javascript',
                'Groovy, Scala, Dart ...',
                'Et les autres librairies et outils de productivité au quotidien'
            ]
        },
        {
            className: 'medias',
            hints: [
                'Web',
                'Jeux',
                'Mobile'
            ],
            detailedHints: [
                'Les différents médias',
                'sur lesquels développer aujourd\'hui'
            ]
        },
        {
            className: 'future',
            hints: [
                'Startups',
                'Objets connectés'
            ],
            detailedHints: [
                'Où découvrir les idées',
                'disruptives du monde de demain'
            ]
        },
        {
            className: 'design',
            hints: [
                'Design',
                'Pratiques',
                'Architectures',
                'Cloud'
            ],
            detailedHints: [
                'Architecture REST',
                'Bases NOSQL',
                'Développement dans le cloud',
                'Pratiques telles que SCRUM ou Kanban'
            ]
        }
    ];
    $scope.cfpOpened = Date.now() <= Date.parse("Aug 16, 2014 23:59:59 GMT+0200");
    $scope.programAvailable = true;

    $scope.newsletters = [];
    $q.when(SharedData.dataLoaded()).then(function(){
        $scope.newsletters = SharedData.data("newsletters");
    });
});

bdxioControllers.controller('PartnersController', function($q, $scope, SharedData) {
    $q.when(SharedData.dataLoaded()).then(function(){
        // Transforming imgId into imgSrc as soon as we have both DOM loaded and SharedData available
        var partnersInfos = SharedData.data("partners");
        _([partnersInfos.gold, partnersInfos.silver, partnersInfos.bronze]).pluck("companies").flatten().each(function(company){
            company.imgSrc = $("#"+company.imgId).attr('src');
        });

        $scope.partnerLevels = [
            _.extend({ title: "Gold", anchorId: "gold" }, partnersInfos.gold),
            _.extend({ title: "Silver", anchorId: "silver" }, partnersInfos.silver),
            _.extend({ title: "Bronze", anchorId: "bronze" }, partnersInfos.bronze)
        ];
    }, errorMessage("Cannot load SharedData"));

    $scope.noActivePartner = function(partnerLevel) {
        return partnerLevel.activeCount==0;
    };

    $scope.someInactivePartnersComing = function(partnerLevel) {
        return partnerLevel.activeCount!=0 && partnerLevel.inactiveCount!=0;
    }
});

bdxioControllers.controller('PeopleController', function($scope, $q, SharedData) {
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
