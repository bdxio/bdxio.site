import {ICFPSlot} from "../int/ICFPSlot";
import {ICFPPresentation} from "../int/ICFPPresentation";
export class CFPSlot implements ICFPSlot {
    from:Date;
    to:Date;
    presentations:Array<ICFPPresentation>;
}