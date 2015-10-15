'use strict';

angular.module('bdxio.app')
    .controller('LiveStreamController', function ($scope, $routeParams, $sce) {

    var youtubeId = {
        'gdAmphi': 'V5J4eQZ45L0',
        'amphiA': 'P0QCauLihB0',
        'amphiB': 'Msov74xR6as',
        'amphiD': 'OvYrBd8FiEE',
        'amphiE': 'dP6VuDinFww'
    };

    $scope.amphiId = $routeParams.amphiId || 'gdAmphi';
    $scope.youtubeUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+youtubeId[$scope.amphiId]+'?autoplay=1');
	addthisevent.refresh();

    });
