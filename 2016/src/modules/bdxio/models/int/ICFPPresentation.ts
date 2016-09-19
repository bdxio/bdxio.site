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

    toSpeakersList():string;
    markedSummary(): string;
}