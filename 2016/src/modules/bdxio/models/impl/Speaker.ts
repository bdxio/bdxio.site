import {ISpeaker} from "../int/ISpeaker";

export class Speaker implements ISpeaker {
    firstName: string;
    lastName: string;
    bio: string;

    company: string;
    companyLogo: string;
    companyLogoStyle: { "background-color": string };

    avatarUrl: string;
    twitter: string;
    linkedin: string;
    gplus: string;

    talk1: string;
    talk2: string;
    talks: string[];

    constructor(opts: ISpeaker) {
        _.extend(this, opts);
    }
}
