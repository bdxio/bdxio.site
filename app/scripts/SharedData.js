"use strict";

angular.module('bdxioModule').factory('SharedData', function ($q, $http, SpreadsheetReader) {
    var SharedData = {
        SPREADSHEETS: [
            {
                tabId: 1,
                dataField: "orgas",
                descriptor: {
                    "firstRow": 2,
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
                dataField: "jurys",
                descriptor: {
                    "firstRow": 2,
                    "columnFields": {
                        "A": "firstName", "B": "lastName", "C": "bio",
                        "D": "company", "E": "avatarUrl", "F": "twitter",
                        "G": "linkedin", "H": "gplus"
                    },
                    "fieldsRequiredToConsiderFilledRow": [ "firstName", "lastName" ]
                }
            },
            {
                tabId: 3,
                dataField: "speakers",
                descriptor: {
                    "firstRow": 2,
                    "columnFields": {
                        "A": "firstName", "B": "lastName", "C": "bio",
                        "D": "company", "E": "avatarUrl", "F": "twitter",
                        "G": "linkedin", "H": "gplus", "I": "blog",
                        "J": "talk1", "K": "talk2"
                    },
                    "fieldsRequiredToConsiderFilledRow": [ "firstName", "lastName" ]
                }
            },
            {
                tabId: 4,
                dataField: "partners",
                descriptor: {
                    "firstRow": 2,
                    "columnFields": {
                        "A": "active", "B": "type", "C": "name",
                        "D": "imgId", "E": "website", "F": "description",
                        "G": "imgHeight"
                    },
                    "fieldsRequiredToConsiderFilledRow": [ "active", "name", "type" ],
                    postProcess: function(results) {
                        // Transforming imgId into imgSrc
                        _.each(results, function(company){
                            company.imgSrc = $("#"+company.imgId).attr('src');
                        });

                        // Grouping results by type
                        results = _.groupBy(results, "type");

                        _.each(_.keys(results), function(partnerType){
                            results[partnerType] = {
                                // Filtering on active companies only
                                companies: _.filter(results[partnerType], function(company){ return company.active=="1"; }),
                                // Identifying partner types having at least 1 active flat to 0
                                // => These partner types should add a note saying we will add new partners soon
                                activeCount: _.filter(results[partnerType], function(company){ return company.active=="1"; }).length,
                                inactiveCount: _.filter(results[partnerType], function(company){ return company.active!="1"; }).length
                            };
                        });

                        return results;
                    }
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
