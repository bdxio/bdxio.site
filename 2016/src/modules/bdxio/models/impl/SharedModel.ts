import "lodash";
import {
    ISharedModel, ISharedModelData, CompaniesByType, Company, Speaker,
    TypedCompaniesByType
} from "../int/ISharedModel";
import {
    SpreadsheetReaderDescriptor,
    PostProcessableSpreadsheetReaderDescriptor,
    SpreadsheetReader,
    SpreadsheetContent
} from "../../services/SpreadsheetReader";
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {errorMessage, rejectDeferred} from "../../../util/errors";

interface ISpreadsheetTabDescriptor {
    tabId: number;
    dataField: string;
    descriptor: SpreadsheetReaderDescriptor;
}

class SpreadsheetTabDescriptor implements ISpreadsheetTabDescriptor {
    tabId: number;
    dataField: string;
    descriptor: SpreadsheetReaderDescriptor;

    constructor(opts: ISpreadsheetTabDescriptor) {
        _.extend(this, opts);
    }
}

export class SharedModel implements ISharedModel {
    public static $inject: Array<string> = ["$http", "$q"];

    private static SPREADSHEET_TABS: Array<SpreadsheetTabDescriptor> = [
        new SpreadsheetTabDescriptor({
            tabId: 2,
            dataField: "orgas",
            descriptor: new SpreadsheetReaderDescriptor({
                firstRow: 2,
                columnFields: {
                    "A": "firstName", "B": "lastName", "C": "bio",
                    "D": "company", "E": "avatarUrl", "F": "twitter",
                    "G": "linkedin", "H": "gplus"
                },
                fieldsRequiredToConsiderFilledRow: [ "firstName", "lastName" ],
                sortBy: [ "lastName", "firstName" ]
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 3,
            dataField: "jurys",
            descriptor: new SpreadsheetReaderDescriptor({
                firstRow: 2,
                columnFields: {
                    "A": "firstName", "B": "lastName", "C": "bio",
                    "D": "company", "E": "avatarUrl", "F": "twitter",
                    "G": "linkedin", "H": "gplus"
                },
                fieldsRequiredToConsiderFilledRow: [ "firstName", "lastName" ],
                sortBy: [ "lastName", "firstName" ]
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 4,
            dataField: "speakers",
            descriptor: new PostProcessableSpreadsheetReaderDescriptor<Speaker, Speaker[]>({
                firstRow: 2,
                columnFields: {
                    "A": "firstName", "B": "lastName", "C": "bio",
                    "D": "company", "E": "companyLogo", "F": "avatarUrl", "G": "twitter",
                    "H": "linkedin", "I": "gplus", "J": "blog",
                    "K": "talk1", "L": "talk2"
                },
                fieldsRequiredToConsiderFilledRow: [ "firstName", "lastName", "bio" ],
                sortBy: [ "lastName", "firstName" ],
                postProcess: function(speakers: Speaker[]) {
                    _.each(speakers, (speaker: Speaker) => {
                        speaker.talk1 = speaker.talk1?speaker.talk1.split(" (")[0]:"";
                        speaker.talk2 = speaker.talk2?speaker.talk2.split(" (")[0]:"";
                        if(speaker.companyLogo) {
                            speaker.companyLogoStyle = speaker.companyLogo.split(" ")[1]==="(white)"?{"background-color":"white"}:null;
                            speaker.companyLogo = speaker.companyLogo.split(" ")[0];
                        }
                    });
                    return speakers;
                }
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 5,
            dataField: "partners",
            descriptor: new PostProcessableSpreadsheetReaderDescriptor<Company,TypedCompaniesByType>({
                firstRow: 2,
                columnFields: {
                    "A": "active", "B": "type", "C": "name",
                    "D": "imgSrc", "E": "website", "F": "description",
                    "G": "imgHeight", "H": "footerImgSrc", "I": "footerImgHeight"
                },
                fieldsRequiredToConsiderFilledRow: [ "active", "name", "type" ],
                postProcess: function(results: Company[]) {
                    // Grouping results by type
                    var companiesGroupedByType = _.groupBy(results, "type");

                    var companyTypeStats: TypedCompaniesByType = <TypedCompaniesByType>{};

                    _.each(_.keys(companiesGroupedByType), function(partnerType){
                        companyTypeStats[partnerType] = {
                            type: partnerType,
                            // Filtering on active companies only
                            companies: _(companiesGroupedByType[partnerType]).filter(company => company.active=="1").map(function(company){
                                return <Company>_.extend(company, {
                                    imgStyle: company.imgHeight?"height: "+company.imgHeight+"px":"",
                                    footerImgStyle: company.footerImgHeight?"height: "+company.footerImgHeight+"px":""
                                });
                            }).value(),
                            // Identifying partner types having at least 1 active flag to 0
                            // => These partner types should add a note saying we will add new partners soon
                            activeCount: _.filter(companiesGroupedByType[partnerType], function(company){ return company.active=="1"; }).length,
                            inactiveCount: _.filter(companiesGroupedByType[partnerType], function(company){ return company.active!="1"; }).length
                        };
                    });

                    return companyTypeStats;
                }
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 6,
            dataField: "news",
            descriptor: new SpreadsheetReaderDescriptor({
                firstRow: 2,
                columnFields: { "A": "id", "B": "published", "C": "title", "D": "date", "E": "content", "F": "picture", "G": "pictureStyles"},
                fieldsRequiredToConsiderFilledRow: [ "title" ]
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 7,
            dataField: "friends",
            descriptor: new SpreadsheetReaderDescriptor({
                firstRow: 3,
                columnFields: {
                    "A": "stdImage", "B": "stdHoverImage", "C": "stdImageHeight", "D": "stdImageWidth",
                    "E": "mobileImage", "F": "mobileHoverImage", "G": "mobileImageHeight", "H": "mobileImageWidth",
                    "I": "url", "J": "label", "K": "itemType"
                },
                fieldsRequiredToConsiderFilledRow: [ "stdImage", "mobileImage", "url", "label" ]
            })
        })
    ];

    private _data: ISharedModelData;
    private _dataLoadedDefer;

    constructor($http: ng.IHttpService, $q: ng.IQService) {
        this._dataLoadedDefer = $q.defer<void>();

        let urlFactory = (tabId) => {
            return "https://spreadsheets.google.com/feeds/cells/1aRUhS3HB1tu3zP9Mz8reug-B6jzyQ67YzkLoAK-7CNE/"+tabId+"/public/basic?alt=json&callback=JSON_CALLBACK&v=3.0";
        };

        let fetchPromises = _.map(SharedModel.SPREADSHEET_TABS, (spreadsheetTabDescriptor) =>
            $http.jsonp<SpreadsheetContent>(urlFactory(spreadsheetTabDescriptor.tabId),{}).then((result) =>
                new SpreadsheetReader($q).read(result.data, spreadsheetTabDescriptor.descriptor)
            , errorMessage("Error while fetching spreadsheet info for tab "+spreadsheetTabDescriptor.tabId))
        );

        this._data = {};
        let spreadsheetsFetched = $q.defer();
        $q.all(fetchPromises).then((spreadsheetInfos) => {
            _.each(spreadsheetInfos, (spreadsheetInfo, idx) => {
                this._data[SharedModel.SPREADSHEET_TABS[idx].dataField] = spreadsheetInfo;
            });
            spreadsheetsFetched.resolve();
        }, rejectDeferred(spreadsheetsFetched, "Error while fetching spreadsheet data"));


        // let voxxrinFetched = $q.defer();
        // VoxxrinReader.readDaySchedule("bdxio15", 0, "15").then(function(daySchedule){
        //     self._data["daySchedule"] = daySchedule;
        //     voxxrinFetched.resolve();
        // });

        $q.all([
            spreadsheetsFetched.promise,
            // voxxrinFetched.promise
        ]).then(() => {
            // let daySchedule = this._data.daySchedule;
            //
            // // Updating speakers data
            // _.each(this._data.speakers, (speaker) => {
            //     speaker.talks = [];
            //     if(speaker.talk1){
            //         speaker.talks.push(daySchedule.schedule[speaker.talk1.toLowerCase()]);
            //     }
            //     if(speaker.talk2){
            //         speaker.talks.push(daySchedule.schedule[speaker.talk2.toLowerCase()]);
            //     }
            // });

            this._dataLoadedDefer.resolve();
        }, rejectDeferred(this._dataLoadedDefer, "Error while fetching data"));
    }

    public get data() {
        return _.cloneDeep<ISharedModelData>(this._data);
    }

    public get dataLoaded(){
        return this._dataLoadedDefer.promise;
    }
}

