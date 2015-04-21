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
                    $scope.news = _.chain(news)
                        .filter(function (n) {
                            return n.published === '1';
                        })
                        .map(function (_item) {
                            return transformItem(_item);
                        })
                        .value();
                });
            }
        };
    });
