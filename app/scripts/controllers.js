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
    $scope.participantSections = [
        {
            title: "L'équipe d'organisation",
            anchor: "orgas",
            participants: [
                {
                    avatarUrl: "https://pbs.twimg.com/profile_images/1204007976/moi_400x400.jpg",
                    firstName: "Josselin",
                    lastName: "Auguste",
                    bio: "Diplomé de l'EPSI Bordeaux en 2007, Josselin est un développeur passionné, fréquentant assidument " +
                         "la communauté des développeurs et startupers Bordelais. Cela l'a amené naturellement à devenir lui-" +
                         "même gérant de startup et co-organisateur d'évènements (les apéros RubyBdx !).",
                    twitter: "josselinauguste",
                    linkedin: "fr.linkedin.com/in/josselinauguste",
                    gplus: null
                },
                {
                    avatarUrl: "http://xn--bousqui-hya.name/images/portrait.jpg",
                    firstName: "Pierre",
                    lastName: "Bousquié",
                    bio: "Pierre est un informaticien : programmeur, administrateur système, " +
                         "ingénieur, ‘architecte logiciel’... Engagé, il participe à plusieurs " +
                         "associations bordelaises et (inter)nationales relatives à son métier : " +
                         "technique, éducatif, artistique, philosophique et politique !",
                    twitter: "pierrebousquie",
                    linkedin: "fr.linkedin.com/pub/pierre-bousquié/31/a83/766",
                    gplus: "117502958654632095028"
                },
                {
                    avatarUrl: "http://www.gravatar.com/avatar/8982d345f5955665f31cfb2bfe66c214.png",
                    firstName: "Frédéric",
                    lastName: "Camblor",
                    bio: "Titulaire d’un master MIAGe à Bordeaux, Frédéric est un développeur " +
                         "web passionné. Il est le leader du Bordeaux JUG qu’il côtoie depuis " +
                         "sa création en 2008, ainsi qu’un contributeur à différents projets " +
                         "opensource (jenkins, restx). Depuis 2010, il participe à différentes " +
                         "conférences techniques, particulièrement Devoxx France où il a été " +
                         "speaker en 2013. C’est suite à ces expériences qu’il a décidé d’en " +
                         "créer une sur la région bordelaise : bdx.io.",
                    twitter: "fcamblor",
                    linkedin: "fr.linkedin.com/pub/frédéric-camblor/6/892/697",
                    gplus: "111948726400665388556"
                },
                {
                    avatarUrl: "https://media.licdn.com/media/p/2/000/010/2f6/0386afe.jpg",
                    firstName: "Laurent",
                    lastName: "Forêt",
                    bio: "Diplômé d’un DEA d’informatique en 2000 à Grenoble, Laurent est " +
                         "depuis ingénieur/architecte dans la région bordelaise. Gérant de " +
                         "la société DEVCOOP, il est surtout passionné de technologie et de " +
                         "développement logiciel avec les technologies Java. Membre du " +
                         "bureau du bordeauxJUG depuis 2011, il co-organise les événements " +
                         "mensuels de l’association.",
                    twitter: "laurentforet",
                    linkedin: "fr.linkedin.com/in/laurentforet",
                    gplus: null
                },
                {
                    avatarUrl: "http://cdn.slidesharecdn.com/profile-photo-RmiGoyard-96x96.jpg?cb=1400736395",
                    firstName: "Rémi",
                    lastName: "Goyard",
                    bio: "Rémi a débuté sa carrière en 1998 en tant que technicien micro " +
                         "réseau (MCSE), puis créateur de son agence web. Aujourd’hui " +
                         "expert technique chez Sqli Bordeaux, il reste passionné par les " +
                         "technologies Internet, et aime transmettre ses connaissances et " +
                         "partager sa passion en s’impliquant dans les communautés locales " +
                         "(PHP, Java, JavaScript). ",
                    twitter: "mimiz33",
                    linkedin: "fr.linkedin.com/in/remigoyard",
                    gplus: null
                },
                {
                    avatarUrl: "https://pbs.twimg.com/profile_images/1295838721/me.png",
                    firstName: "Christophe",
                    lastName: "Picot",
                    bio: "Diplômé de l’ENSEIRB en 2000, Christophe a forgé son expérience " +
                         "dans les ssii de la région Bordelaise. Il est maintenant responsable " +
                         "de la cellule de développement en nouvelles technologies de la " +
                         "ville de Bordeaux et participe à l’élaboration de nombreux projets " +
                         "innovants. ",
                    twitter: "christophepicot",
                    linkedin: "fr.linkedin.com/in/christophepicot",
                    gplus: null
                },
                {
                    avatarUrl: "http://d13pix9kaak6wt.cloudfront.net/background/damien.varron_1341958523_56.jpg",
                    firstName: "Damien",
                    lastName: "Varron",
                    bio: "Devenu développeur un peu par hasard après une école de " +
                         "commerce, Damien est aujourd’hui co-gérant de la société Effervea " +
                         "qui édite le site Ecoles2commerce.com. Il a également fondé " +
                         "Digisquare, l’annuaire en ligne des évènements du numérique à " +
                         "Bordeaux, après avoir participé à de nombreux meetups sur la " +
                         "programmation et les startups. ",
                    twitter: "damusnet",
                    linkedin: "fr.linkedin.com/in/damienvarron",
                    gplus: null
                }
            ]
        }
    ];
});