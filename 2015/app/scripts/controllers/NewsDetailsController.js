'use strict';

angular.module('bdxio.app')
    .controller('NewsDetailsController', function ($scope, $routeParams, $q, $sce, SharedData) {

        var _id = $routeParams.id;

        var transformItem = function (_item) {
            _item.htmlContent = $sce.trustAsHtml(_item.content);
            return _item;
        };


        $q.when(SharedData.dataLoaded()).then(function () {
            var news = SharedData.data("news");
            var item = _.find(news, {id: _id});
            if (item) {
                $scope.item = transformItem(item);
            }
        });

    });
