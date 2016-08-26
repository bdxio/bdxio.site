import {ICFPPresentation} from "../int/ICFPPresentation";
import {ICFPSpeaker} from "../int/ICFPSpeaker";
export class CFPPresentation implements ICFPPresentation {

    id:string;
    title:string;
    summary:string;
    speakers:Array<ICFPSpeaker>;
    track:string;
    type:string;
    from:Date;
    to:Date;
    room:string;

    public toSpeakersList():string {
        return _.map(this.speakers, (speaker:ICFPSpeaker) => speaker.name + (speaker.company ? ' (' + speaker.company + ')' : '')).join(', ');
    }
}