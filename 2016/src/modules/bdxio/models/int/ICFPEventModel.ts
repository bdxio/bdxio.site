import {ICFPEvent} from "./ICFPEvent";
export interface ICFPEventModel {
    build(eventName:string, apiUrl:string):ICFPEvent;
}