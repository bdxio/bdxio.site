import {IAttendee} from "./IAttendee";

export interface ISpeaker extends IAttendee {
    companyLogoStyle?: { "background-color": string };

    talk1: string;
    talk2: string;
    talk3: string;
    talks: string[];
}
