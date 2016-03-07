import IPromise = angular.IPromise;
import {ISpeaker} from "./ISpeaker";
import {ICompany} from "./ICompany";


export interface ICompaniesByType {
    type: string,
    companies: ICompany[];
    activeCount: number;
    inactiveCount: number;
}

export interface ITypedCompaniesByType {
    [companyType:string]: ICompaniesByType
}

export interface ISharedModelData {
    orgas?: any;
    jurys?: any;
    speakers?: ISpeaker[];
    partners?: ITypedCompaniesByType;
    news?: any;
    friends?: any;
    daySchedule?: any;
}

export interface ISharedModel {
    data: ISharedModelData;
    dataLoaded: IPromise<void>;
}