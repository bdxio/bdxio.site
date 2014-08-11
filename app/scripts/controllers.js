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