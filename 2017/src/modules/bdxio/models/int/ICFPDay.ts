import {IHypermediaElement} from "./IHypermediaElement";
import {ICFPSlot} from "./ICFPSlot";
import {ICFPPresentation} from "./ICFPPresentation";
import * as moment from 'moment';

export interface ICFPDay extends IHypermediaElement {
    id: string;
    title:string;
    tracks:Array<any>;
    rooms:Array<any>;
    date: moment.Moment;
    schedules:Array<ICFPPresentation>;
    slots:Array<ICFPSlot>;
}