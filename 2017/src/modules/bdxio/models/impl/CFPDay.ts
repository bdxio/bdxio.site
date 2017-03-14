import {ICFPPresentation} from "../int/ICFPPresentation";
import {ICFPDay} from "../int/ICFPDay";
import {ICFPSlot} from "../int/ICFPSlot";
import * as moment from 'moment';

export class CFPDay implements ICFPDay {
    href:string;
    id:string;
    title:string;
    schedules:Array<ICFPPresentation>;
    slots:Array<ICFPSlot>;
    date:moment.Moment;
    tracks:Array<any>;
    rooms:Array<any>;
}