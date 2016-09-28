import {ICFPSpeaker} from "./ICFPSpeaker";
import * as moment from 'moment';

export interface ICFPPresentation {
    id:string;
    title: string;
    summary: string;
    speakers: Array<ICFPSpeaker>;
    track: string;
    type:string;
    from: moment.Moment;
    to: moment.Moment;
    room: string;
    overflow:boolean;
    overflowThrough:boolean;
    isBreak:boolean;

    toSpeakersList():string;
    markedSummary(): string;
}