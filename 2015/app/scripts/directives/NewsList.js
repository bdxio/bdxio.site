angular.module('bdxio.app')
    .directive('newsList', function () {

        return {
            restrict: 'E',
            templateUrl: 'templates/directives/NewsList.html',
            scope: {
                news: '='
            },
            controller: function ($scope, $sce) {

                $scope.$watchCollection('news', function (news) {

                    _.each(news, function (_item) {
                        _item.htmlContent = $sce.trustAsHtml(_item.content);
                    });

                });
            }
        };

    });