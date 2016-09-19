import {ICFPPresentation} from "./ICFPPresentation";
import * as moment from 'moment';

export interface ICFPSlot {
    from:moment.Moment;
    to:moment.Moment;
    presentations:Array<ICFPPresentation>;
}
