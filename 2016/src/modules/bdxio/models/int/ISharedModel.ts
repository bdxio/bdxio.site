import IPromise = angular.IPromise;
import {Speaker} from "../impl/SharedModel";

export interface ISharedModelData {
    orgas?: any;
    jurys?: any;
    speakers?: Speaker[];
    partners?: any;
    news?: any;
    friends?: any;
    daySchedule?: any;
}

export interface ISharedModel {
    data: ISharedModelData;
    dataLoaded: IPromise<void>;
}