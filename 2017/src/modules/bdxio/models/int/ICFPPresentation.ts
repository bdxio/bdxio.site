import {ICFPSpeaker} from "./ICFPSpeaker";
import * as moment from 'moment';
import {ITalkAssets} from "./ISharedModel";

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
    roomIndex: number;
    overflow:boolean;
    overflowThrough:boolean;
    assets:ITalkAssets;

    isBreak:boolean;
    isLunch:boolean;

    toSpeakersList():string;
    markedSummary(): string;
}