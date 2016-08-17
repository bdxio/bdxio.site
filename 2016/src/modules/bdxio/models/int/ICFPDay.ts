import {IHypermediaElement} from "./IHypermediaElement";
import {ICFPSlot} from "./ICFPSlot";
import {ICFPPresentation} from "./ICFPPresentation";
export interface ICFPDay extends IHypermediaElement {
    id: string;
    title:string;
    tracks:Array<any>;
    rooms:Array<any>;
    date: Date;
    schedules:Array<ICFPPresentation>;
    slots:Array<ICFPSlot>;
}