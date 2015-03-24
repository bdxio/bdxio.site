angular.module('bdxio.app')
    .directive('newsList', function () {

        return {
            restrict: 'E',
            templateUrl: 'templates/directives/NewsList.html',
            scope: {
                news: '='
            },
            controller: function ($scope, $sce, $location) {

                var transformItem = function (_item) {
                    _item.htmlContent = $sce.trustAsHtml(_item.content);
                    return _item;
                };

                $scope.display = function (item) {
                    $location.path('/news/' + item.id);
                };

                $scope.$watchCollection('news', function (news) {
                    _.map(news, function (_item) {
                        return transformItem(_item);
                    });
                });
            }
        };
    });
