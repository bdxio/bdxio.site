import IPromise = angular.IPromise;
import {ISpeaker} from "./ISpeaker";
import {ICompany} from "./ICompany";
import {IAttendee} from "./IAttendee";
import {INews} from "./INews";
import {IFriend} from "./IFriend";
import {SpreadsheetReaderDescriptor} from "../../services/SpreadsheetReader";


export interface ICompaniesByType {
    type: string,
    companies: ICompany[];
    activeCount: number;
    inactiveCount: number;
}

export interface ITypedCompaniesByType {
    [companyType:string]: ICompaniesByType
}

export interface IConfig {
    livestreamEnabled: string,
    registrationOpened: string,
    cfpStatus: string
}

export interface ISharedModelData {
    config?: IConfig;
    orgas?: IAttendee[];
    jurys?: IAttendee[];
    speakers?: ISpeaker[];
    partners?: ITypedCompaniesByType;
    news?: INews[];
    friends?: IFriend[];
    daySchedule?: any;
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
