import {ICFPEvent} from "./ICFPEvent";
import IPromise = angular.IPromise;
import {ICFPPresentation} from "./ICFPPresentation";
export interface ICFPEventModel {
    buildEvent(eventName:string, apiUrl:string):IPromise<ICFPEvent>;
    buildPresentations(apiUrl:string):IPromise<Array<ICFPPresentation>>;
}