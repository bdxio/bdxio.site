'use strict';

angular.module('bdxio.app')
    .controller('LiveStreamController', function ($scope, $routeParams, $sce) {

    var youtubeId = _.pluck(SharedData.data("livestreams"), "youtubId");
    // TODO: Externalize this into google spreadsheets
    var youtubeId = {
        'gdAmphi': 'xxx',
        'amphiA': 'xxx',
        'amphiB': 'xxx',
        'amphiD': 'xxx',
        'amphiE': 'xxx'
    };

    $scope.amphiId = $routeParams.amphiId || 'gdAmphi';
    $scope.youtubeUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+youtubeId[$scope.amphiId]+'?autoplay=1');
	addthisevent.refresh();

    });
