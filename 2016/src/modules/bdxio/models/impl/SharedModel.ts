import "lodash";
import {
    ISharedModel, ISharedModelData,
    ITypedCompaniesByType, ISpreadsheetTabDescriptor, IConfig
} from "../int/ISharedModel";
import {
    SpreadsheetReaderDescriptor,
    PostProcessableSpreadsheetReaderDescriptor,
    SpreadsheetReader,
    SpreadsheetContent
} from "../../services/SpreadsheetReader";
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {errorMessage, rejectDeferred} from "../../../util/errors";
import {ISpeaker} from "../int/ISpeaker";
import {ICompany} from "../int/ICompany";
import {Attendee} from "./Attendee";
import {Speaker} from "./Speaker";
import {INews} from "../int/INews";
import * as moment from 'moment';
import {ICFPEventModel} from "../int/ICFPEventModel";
import {ICFPPresentation} from "../int/ICFPPresentation";
import {ICFPEvent} from "../int/ICFPEvent";
import {ProgramOptions} from "../../angular/components/program/ProgramOptions";

class SpreadsheetTabDescriptor<T> implements ISpreadsheetTabDescriptor<T> {
    tabId: number;
    dataField: string;
    descriptor: SpreadsheetReaderDescriptor<T>;

    constructor(opts: ISpreadsheetTabDescriptor<T>) {
        _.extend(this, opts);
    }
}

export interface IConfigEntry {
    key: string;
    value: string;
    type: string;
}

export class SharedModel implements ISharedModel {
    public static $inject: Array<string> = ["$http", "$q", "ICFPEventModel"];

    private static SPREADSHEET_TABS: Array<SpreadsheetTabDescriptor<any>> = [
        new SpreadsheetTabDescriptor({
            tabId: 1,
            dataField: "config",
            descriptor: new PostProcessableSpreadsheetReaderDescriptor<IConfigEntry, IConfig>({
                firstRow: 2,
                columnFields: {
                    "A": "key", "B": "value", "C": "type"
                },
                fieldsRequiredToConsiderFilledRow: [ "key", "value" ],
                postProcess: function(configEntries: IConfigEntry[]): IConfig {
                    let config = {};
                    _.each(configEntries, (configEntry: IConfigEntry) => {
                        if (configEntry.type === 'date') {
                            config[configEntry.key] = moment(configEntry.value, 'DD/MM/YYYY');
                        } else if (configEntry.type === 'datetime') {
                            config[configEntry.key] = moment(configEntry.value, 'DD/MM/YYYY HH:mm');
                        } else if(configEntry.type === 'comma-separated-string'){
                            config[configEntry.key] = configEntry.value?configEntry.value.split(","):[];
                        } else if (configEntry.type === 'json') {
                            config[configEntry.key] = JSON.parse(configEntry.value);
                        } else {
                            config[configEntry.key] = configEntry.value;
                        }
                    });
                    return <IConfig>config;
                }
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 2,
            dataField: "orgas",
            descriptor: new SpreadsheetReaderDescriptor<Attendee>({
                firstRow: 2,
                columnFields: {
                    "A": "firstName", "B": "lastName", "C": "bio",
                    "D": "company", "E": "avatarUrl", "F": "twitter",
                    "G": "linkedin", "H": "gplus"
                },
                fieldsRequiredToConsiderFilledRow: [ "firstName", "lastName" ],
                resultClass: Attendee,
                sortBy: [ "lastName", "firstName" ]
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 3,
            dataField: "jurys",
            descriptor: new SpreadsheetReaderDescriptor<Attendee>({
                firstRow: 2,
                columnFields: {
                    "A": "firstName", "B": "lastName", "C": "bio",
                    "D": "company", "E": "avatarUrl", "F": "twitter",
                    "G": "linkedin", "H": "gplus"
                },
                fieldsRequiredToConsiderFilledRow: [ "firstName", "lastName" ],
                resultClass: Attendee,
                sortBy: [ "lastName", "firstName" ]
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 4,
            dataField: "speakers",
            descriptor: new PostProcessableSpreadsheetReaderDescriptor<ISpeaker, ISpeaker[]>({
                firstRow: 2,
                columnFields: {
                    "A": "firstName", "B": "lastName", "C": "bio",
                    "D": "company", "E": "companyLogo", "F": "avatarUrl", "G": "twitter",
                    "H": "linkedin", "I": "gplus", "J": "blog",
                    "K": "talk1", "L": "talk2", "M": "talk3"
                },
                fieldsRequiredToConsiderFilledRow: [ "firstName", "lastName", "bio" ],
                sortBy: [ "lastName", "firstName" ],
                postProcess: function(speakers: ISpeaker[]) {
                    return _.map(speakers, (speaker: ISpeaker) => {
                        speaker.talks = [];
                        _.each(_.range(1, 4), function(talkIdx) {
                            speaker["talk"+talkIdx] = speaker["talk"+talkIdx]?speaker["talk"+talkIdx].split(" (")[0]:"";
                            if(speaker["talk"+talkIdx]) {
                                speaker.talks.push(speaker["talk"+talkIdx]);
                            }
                        });
                        if(speaker.companyLogo) {
                            speaker.companyLogoStyle = speaker.companyLogo.split(" ")[1]==="(white)"?{"background-color":"white"}:null;
                            speaker.companyLogo = speaker.companyLogo.split(" ")[0];
                        }

                        return new Speaker(speaker);
                    });
                }
            })
        }),
        new SpreadsheetTabDescriptor({
            tabId: 5,
            dataField: "partners",
            descriptor: new PostProcessableSpreadsheetReaderDescriptor<ICompany,ITypedCompaniesByType>({
                firstRow: 2,
                columnFields: {
                    "A": "active", "B": "type", "C": "name",
                    "D": "imgSrc", "E": "website", "F": "description",
                    "G": "imgHeight", "H": "footerImgSrc", "I": "footerImgHeight"
                },
                fieldsRequiredToConsiderFilledRow: [ "active", "name", "type" ],
                postProcess: function(results: ICompany[]) {
                    // Grouping results by type
                    var companiesGroupedByType = _.groupBy(results, "type");

                    var companyTypeStats: ITypedCompaniesByType = <ITypedCompaniesByType>{};

                    _.each(_.keys(companiesGroupedByType), function(partnerType){
                        companyTypeStats[partnerType] = {
                            type: partnerType,
                            // Filtering on active companies only
                            companies: _(companiesGroupedByType[partnerType]).filter(company => company.active=="1").map(function(company){
                                return <ICompany>_.extend(company, {
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
            descriptor: new PostProcessableSpreadsheetReaderDescriptor<INews, INews[]>({
                firstRow: 2,
                columnFields: { "A": "id", "B": "published", "C": "title", "D": "date", "E": "thumbnail", "F": "content", "G": "picture", "H": "pictureStyles", "I": "modalStyles"},
                fieldsRequiredToConsiderFilledRow: [ "title" ],
                postProcess: function(results: INews[]) {
                    return _.filter(results, (news => {
                        return news.published == '1';
                    }));
                }
            }),
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

    constructor($http: ng.IHttpService, $q: ng.IQService, cfpEventModel: ICFPEventModel) {
        this._dataLoadedDefer = $q.defer<void>();

        let urlFactory = (tabId) => {
            return "https://spreadsheets.google.com/feeds/cells/1aRUhS3HB1tu3zP9Mz8reug-B6jzyQ67YzkLoAK-7CNE/"+tabId+"/public/basic?alt=json&callback=JSON_CALLBACK&v=3.0";
        };

        let fetchPromises = _.map(SharedModel.SPREADSHEET_TABS, (spreadsheetTabDescriptor) =>
            $http.jsonp<SpreadsheetContent>(urlFactory(spreadsheetTabDescriptor.tabId),{}).then((result) =>
                new SpreadsheetReader($q).read(result.data, spreadsheetTabDescriptor.descriptor)
            , () => {
                errorMessage("Error while fetching spreadsheet info for tab " + spreadsheetTabDescriptor.tabId)(null);
                return $q.reject();
            })
        );

        this._data = {};
        let spreadsheetsFetched = $q.defer();
        $q.all(fetchPromises).then((spreadsheetInfos) => {
            _.each(spreadsheetInfos, (spreadsheetInfo, idx) => {
                this._data[SharedModel.SPREADSHEET_TABS[idx].dataField] = spreadsheetInfo;
            });
            localStorage.setItem("data", JSON.stringify(this._data));
            spreadsheetsFetched.resolve();
        }, () => {
            // Falling back to load data from local storage
            console.info("Cannot fetch spreadsheet data... falling back to localstorage data");
            this._data = JSON.parse(localStorage.getItem("data"));
            spreadsheetsFetched.resolve();
        });


        // let voxxrinFetched = $q.defer();
        // VoxxrinReader.readDaySchedule("bdxio15", 0, "15").then(function(daySchedule){
        //     self._data["daySchedule"] = daySchedule;
        //     voxxrinFetched.resolve();
        // });

        this._data.cfpProgramOptions = ProgramOptions.BDXIO;

        $q.all([
            spreadsheetsFetched.promise,
            // voxxrinFetched.promise
        ]).then(([_, event, presentations]) => {
            return $q.all([
                cfpEventModel.buildEvent('BDX I/O 2016', 'https://cfp.bdx.io/api/conferences/BdxIO16', this._data.cfpProgramOptions),
                cfpEventModel.buildPresentations('https://cfp.bdx.io/api/conferences/BdxIO16', this)
            ]);
        }, rejectDeferred(this._dataLoadedDefer, "Error while fetching data"))
        .then(([event, presentations]) => {
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

            this._data.event = <ICFPEvent>event;
            this._data.presentations = {};
            _.each(<Array<ICFPPresentation>>presentations, (prez) => this._data.presentations[prez.id] = prez)

            this._dataLoadedDefer.resolve();
        }, rejectDeferred(this._dataLoadedDefer, "Error while fetching schedule and talks"));
    }

    public get data() {
        // return _.cloneDeep<ISharedModelData>(this._data);
        return this._data;
    }

    public get dataLoaded(){
        return this._dataLoadedDefer.promise;
    }
}

