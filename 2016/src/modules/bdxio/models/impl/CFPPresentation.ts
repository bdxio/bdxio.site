import {ICFPPresentation} from "../int/ICFPPresentation";
import {ICFPSpeaker} from "../int/ICFPSpeaker";
export class CFPPresentation implements ICFPPresentation {
    id:string;
    title:string;
    summary:string;
    speakers:Array<ICFPSpeaker>;
    track:string;
    from:Date;
    to:Date;
    room:string;
}