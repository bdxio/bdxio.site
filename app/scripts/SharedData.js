"use strict";

angular.module('bdxioModule').factory('SharedData', function ($q, $http, SpreadsheetReader) {
    var SharedData = {
        DESCRIPTORS: {
            orgas: {
                "firstRow": 2,
                "title": "L'équipe d'organisation",
                "anchor": "orgas",
                "columnFields": {
                    "A": "firstName",
                    "B": "lastName",
                    "C": "bio",
                    "D": "avatarUrl",
                    "E": "twitter",
                    "F": "linkedin",
                    "G": "gplus"
                }
            }
        },
        _data: {},
        _dataLoadedDefer: $q.defer(),
        init: function(opts) {
            var self = this;
            var defer = $q.defer();

            var urlFactory = function(tabId) {
                return opts.offline
                    ?"/data/mockedSpreadsheet"+tabId+".json"
                    :"https://spreadsheets.google.com/feeds/cells/1TWnEIQScabIWWGbH5GYLPeWZaM6y3Qww9aVZj6o6Xm4/"+tabId+"/public/basic?alt=json&callback=JSON_CALLBACK&v=3.0";
            };

            $q.when(
                $http.jsonp(urlFactory(1),{})
            ).then(function(spreadsheetQueryResult){
                $q.all([
                    SpreadsheetReader.read(spreadsheetQueryResult.data, SharedData.DESCRIPTORS.orgas)
                ]).then(function(results) {
                    self._data["orgas"] = results[0];
                    self._dataLoadedDefer.resolve();
                    defer.resolve();
                });
            });

            return defer.promise;
        },
        data: function(key) {
            return this._data[key]?_.cloneDeep(this._data[key]):null;
        },
        dataLoaded: function(){
            return this._dataLoadedDefer.promise;
        }
    };
    return SharedData;
});
