"use strict";

angular.module('bdxioModule').factory('SharedData', function ($q, $http, SpreadsheetReader) {
    var SharedData = {
        SPREADSHEETS: [
            {
                tabId: 1,
                dataField: "orgas",
                descriptor: {
                    "firstRow": 2,
                    "title": "L'équipe d'organisation",
                    "anchor": "orgas",
                    "columnFields": {
                        "A": "firstName", "B": "lastName", "C": "bio",
                        "D": "company", "E": "avatarUrl", "F": "twitter",
                        "G": "linkedin", "H": "gplus"
                    },
                    "fieldsRequiredToConsiderFilledRow": [ "firstName", "lastName" ]
                }
            },
            {
                tabId: 2,
                dataField: "speakers",
                descriptor: {
                    "firstRow": 2,
                    "title": "Les speakers",
                    "anchor": "speakers",
                    "columnFields": {
                        "A": "firstName", "B": "lastName", "C": "bio",
                        "D": "company", "E": "avatarUrl", "F": "twitter",
                        "G": "linkedin", "H": "gplus", "I": "blog",
                        "J": "talk1", "K": "talk2"
                    },
                    "fieldsRequiredToConsiderFilledRow": [ "firstName", "lastName" ]
                }
            }
        ],
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

            var fetchPromises = _.map(SharedData.SPREADSHEETS, function(spreadsheet){
                return $http.jsonp(urlFactory(spreadsheet.tabId),{}).then(function(spreadsheetQueryResult){
                    return SpreadsheetReader.read(spreadsheetQueryResult.data, spreadsheet.descriptor);
                }, errorMessage("Error while fetching spreadsheet info for tab "+spreadsheet.tabId));
            });

            $q.all(fetchPromises).then(function(spreadsheetInfos) {
                _.each(spreadsheetInfos, function(spreadsheetInfo, idx){
                    self._data[SharedData.SPREADSHEETS[idx].dataField] = spreadsheetInfo;
                });
                self._dataLoadedDefer.resolve();
                defer.resolve();
            }, rejectDeferred(defer, "Error while fetching spreadsheet data"));

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
