import {ICFPPresentation} from "./ICFPPresentation";
export interface ICFPSlot {
    from:Date;
    to:Date;
    presentations:Array<ICFPPresentation>;
}
