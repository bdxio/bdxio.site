import IPromise = angular.IPromise;
import {ISpeaker} from "./ISpeaker";
import {ICompany} from "./ICompany";
import {IAttendee} from "./IAttendee";
import {INews} from "./INews";
import {IFriend} from "./IFriend";
import {SpreadsheetReaderDescriptor} from "../../services/SpreadsheetReader";
import * as moment from 'moment';
import {ICFPEvent} from "./ICFPEvent";
import {ICFPPresentation} from "./ICFPPresentation";
import {ProgramOptions} from "../../angular/components/program/ProgramOptions";
import {LivestreamChannel} from "../impl/LivestreamChannel";
import Dictionary = _.Dictionary;

export interface ICompaniesByType {
    type: string,
    companies: ICompany[];
    activeCount: number;
    inactiveCount: number;
}


export interface IConfig {
    registrationOpened: string;
    livestreamOpeningDate: moment.Moment;
    cfpOpeningDate: moment.Moment;
    cfpClosingDate: moment.Moment;
    talksListPublishingDate: moment.Moment;
    programPublishingDate: moment.Moment;
    hiddenTalks: string[];
    livestreamChannels: any;
}

export interface ISharedModelData {
    config?: IConfig;
    orgas?: IAttendee[];
    jurys?: IAttendee[];
    speakers?: ISpeaker[];
    partners?: Dictionary<ICompaniesByType>;
    news?: INews[];
    friends?: IFriend[];
    daySchedule?: any;
    event?: ICFPEvent;
    presentations?: { [s: string]: ICFPPresentation };
    cfpProgramOptions?: ProgramOptions;
}

export interface ISpreadsheetTabDescriptor<T> {
    tabId: number;
    dataField: string;
    descriptor: SpreadsheetReaderDescriptor<T>;
}

export interface ISharedModel {
    data: ISharedModelData;
    dataLoaded: IPromise<void>;
}
