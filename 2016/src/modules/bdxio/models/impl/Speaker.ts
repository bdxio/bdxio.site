import {ISpeaker} from "../int/ISpeaker";
import {Attendee} from "./Attendee";

export class Speaker extends Attendee implements ISpeaker {
    
    companyLogoStyle: { "background-color": string };

    talk1: string;
    talk2: string;
    talks: string[];

    constructor(opts: ISpeaker) {
        super(opts);
        _.extend(this, opts);
    }
}
