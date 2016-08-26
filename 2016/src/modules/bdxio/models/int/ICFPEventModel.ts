import {ICFPEvent} from "./ICFPEvent";
import IPromise = angular.IPromise;
export interface ICFPEventModel {
    build(eventName:string, apiUrl:string):IPromise<ICFPEvent>;
}