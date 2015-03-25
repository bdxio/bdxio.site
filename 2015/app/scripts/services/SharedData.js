"use strict";

angular.module('bdxio.app')
    .factory('SharedData', function ($q, $http, SpreadsheetReader, VoxxrinReader) {

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
                    "fieldsRequiredToConsiderFilledRow": [ "firstName", "lastName" ],
                    "sortBy": [ "lastName", "firstName" ]
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
                    "fieldsRequiredToConsiderFilledRow": [ "firstName", "lastName" ],
                    "sortBy": [ "lastName", "firstName" ]
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
                    "fieldsRequiredToConsiderFilledRow": [ "firstName", "lastName" ],
                    "sortBy": [ "lastName", "firstName" ]
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
                    "postProcess": function(results) {
                        // Grouping results by type
                        results = _.groupBy(results, "type");

                        _.each(_.keys(results), function(partnerType){
                            results[partnerType] = {
                                // Filtering on active companies only
                                companies: _(results[partnerType]).filter(function(company){ return company.active=="1"; }).map(function(company){
                                    return _.extend(company, { imgStyle: company.imgHeight?"height: "+company.imgHeight+"px":"" });
                                }).value(),
                                // Identifying partner types having at least 1 active flat to 0
                                // => These partner types should add a note saying we will add new partners soon
                                activeCount: _.filter(results[partnerType], function(company){ return company.active=="1"; }).length,
                                inactiveCount: _.filter(results[partnerType], function(company){ return company.active!="1"; }).length
                            };
                        });

                        return results;
                    }
                }
            },
            {
                tabId: 5,
                dataField: "news",
                descriptor: {
                    firstRow: 2,
                    columnFields: { "A": "id", "B": "title", "C": "date", "D": "picture", "E": "content" },
                    "fieldsRequiredToConsiderFilledRow": [ "title" ]
                }
            },
            {
                tabId: 6,
                dataField: "friends",
                descriptor: {
                    firstRow: 3,
                    columnFields: {
                        "A": "stdImage", "B": "stdHoverImage", "C": "stdImageHeight", "D": "stdImageWidth",
                        "E": "mobileImage", "F": "mobileHoverImage", "G": "mobileImageHeight", "H": "mobileImageWidth",
                        "I": "url", "J": "label", "K": "itemType"
                    },
                    "fieldsRequiredToConsiderFilledRow": [ "stdImage", "mobileImage", "url", "label" ]
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
                    :"https://spreadsheets.google.com/feeds/cells/1EfL1sYYjfvUy59rMej16sqph7O4TQDuesqTDZZqzMng/"+tabId+"/public/basic?alt=json&callback=JSON_CALLBACK&v=3.0";
            };

            var fetchPromises = _.map(SharedData.SPREADSHEETS, function(spreadsheet){
                return $http.jsonp(urlFactory(spreadsheet.tabId),{}).then(function(spreadsheetQueryResult){
                    return SpreadsheetReader.read(spreadsheetQueryResult.data, spreadsheet.descriptor);
                }, errorMessage("Error while fetching spreadsheet info for tab "+spreadsheet.tabId));
            });

            var spreadsheetsFetched = $q.defer();
            $q.all(fetchPromises).then(function(spreadsheetInfos) {
                _.each(spreadsheetInfos, function(spreadsheetInfo, idx){
                    self._data[SharedData.SPREADSHEETS[idx].dataField] = spreadsheetInfo;
                });
                spreadsheetsFetched.resolve();
            }, rejectDeferred(spreadsheetsFetched, "Error while fetching spreadsheet data"));


            var voxxrinFetched = $q.defer();
            VoxxrinReader.readDaySchedule("bdxio14", 0, "14").then(function(daySchedule){
                self._data["daySchedule"] = daySchedule;
                voxxrinFetched.resolve();
            });

            $q.all([
                spreadsheetsFetched.promise,
                voxxrinFetched.promise
            ]).then(function(){
                var daySchedule = self._data["daySchedule"];

                // Updating speakers data
                _.each(self._data["speakers"], function(speaker){
                    speaker.talks = [];
                    if(speaker.talk1){
                        speaker.talks.push(daySchedule.schedule[speaker.talk1.toLowerCase()]);
                    }
                    if(speaker.talk2){
                        speaker.talks.push(daySchedule.schedule[speaker.talk2.toLowerCase()]);
                    }
                });

                self._dataLoadedDefer.resolve();
                defer.resolve();
            }, rejectDeferred(defer, "Error while fetching data"));

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
