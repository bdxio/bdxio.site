import {ICFPEvent} from "./ICFPEvent";
import IPromise = angular.IPromise;
import {ICFPPresentation} from "./ICFPPresentation";
import {ISharedModel} from "./ISharedModel";
export interface ICFPEventModel {
    buildEvent(eventName:string, apiUrl:string):IPromise<ICFPEvent>;
    buildPresentations(apiUrl:string, sharedModel: ISharedModel):IPromise<Array<ICFPPresentation>>;
}