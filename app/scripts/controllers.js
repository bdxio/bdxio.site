/* global angular */
'use strict';

var bdxioControllers = angular.module('bdxioControllers', []);

bdxioControllers.controller('HomeController', function($scope){
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
});

bdxioControllers.controller('PartnersController', function() {

});

bdxioControllers.controller('PeopleController', function($scope) {
    $scope.speakers = [
        {
            avatarUrl: "https://pbs.twimg.com/profile_images/1204007976/moi_400x400.jpg",
            firstName: "Josselin",
            lastName: "Auguste",
            bio: "Diplomé de l'EPSI Bordeaux en 2007, Josselin est un développeur passionné, fréquentant assidument " +
                 "la communauté des développeurs et startupers Bordelais. Cela l'a amené naturellement à devenir lui-" +
                 "même gérant de startup et co-organisateur d'évènements (les apéros RubyBdx !).",
            twitter: "josselinauguste",
            linkedin: "josselinauguste",
            gplus: null
        },
        {
            avatarUrl: "https://pbs.twimg.com/profile_images/1204007976/moi_400x400.jpg",
            firstName: "Josselin",
            lastName: "Auguste",
            bio: "Diplomé de l'EPSI Bordeaux en 2007, Josselin est un développeur passionné, fréquentant assidument " +
                 "la communauté des développeurs et startupers Bordelais. Cela l'a amené naturellement à devenir lui-" +
                 "même gérant de startup et co-organisateur d'évènements (les apéros RubyBdx !).",
            twitter: "josselinauguste",
            linkedin: "josselinauguste",
            gplus: null
        },
        {
            avatarUrl: "https://pbs.twimg.com/profile_images/1204007976/moi_400x400.jpg",
            firstName: "Josselin",
            lastName: "Auguste",
            bio: "Diplomé de l'EPSI Bordeaux en 2007, Josselin est un développeur passionné, fréquentant assidument " +
                 "la communauté des développeurs et startupers Bordelais. Cela l'a amené naturellement à devenir lui-" +
                 "même gérant de startup et co-organisateur d'évènements (les apéros RubyBdx !).",
            twitter: "josselinauguste",
            linkedin: "josselinauguste",
            gplus: null
        },
        {
            avatarUrl: "https://pbs.twimg.com/profile_images/1204007976/moi_400x400.jpg",
            firstName: "Josselin",
            lastName: "Auguste",
            bio: "Diplomé de l'EPSI Bordeaux en 2007, Josselin est un développeur passionné, fréquentant assidument " +
                 "la communauté des développeurs et startupers Bordelais. Cela l'a amené naturellement à devenir lui-" +
                 "même gérant de startup et co-organisateur d'évènements (les apéros RubyBdx !).",
            twitter: "josselinauguste",
            linkedin: "josselinauguste",
            gplus: null
        }
    ];
});