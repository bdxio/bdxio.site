import {ICFPSpeaker} from "./ICFPSpeaker";
export interface ICFPPresentation {
    id:string;
    title: string;
    summary: string;
    speakers: Array<ICFPSpeaker>;
    track: string;
    from: Date;
    to: Date;
    room: string;
}