import {ICFPEvent} from "./ICFPEvent";
import IPromise = angular.IPromise;
import {ICFPPresentation} from "./ICFPPresentation";
import {ISharedModel} from "./ISharedModel";
import {ProgramOptions} from "../../angular/components/program/ProgramOptions";
export interface ICFPEventModel {
    buildEvent(eventName:string, apiUrl:string, options:ProgramOptions):IPromise<ICFPEvent>;
    buildPresentations(apiUrl:string, sharedModel: ISharedModel):IPromise<Array<ICFPPresentation>>;
}