import {ICFPSlot} from "../int/ICFPSlot";
import {ICFPPresentation} from "../int/ICFPPresentation";
import * as moment from 'moment';

export class CFPSlot implements ICFPSlot {
    from:moment.Moment;
    to:moment.Moment;
    presentations:Array<ICFPPresentation>;
}