import {ICFPEvent} from "../int/ICFPEvent";
import {ICFPDay} from "../int/ICFPDay";
export class CFPEvent implements ICFPEvent {
    name:string;
    days:Array<ICFPDay>;
}