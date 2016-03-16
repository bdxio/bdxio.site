import {IAttendee} from "../int/IAttendee";
export class Attendee implements IAttendee {
    firstName: string;
    lastName: string;
    bio: string;
    
    company: string;
    companyLogo: string;

    avatarUrl: string;
    twitter: string;
    linkedin: string;
    gplus: string;

    blog: string;
    
    constructor(opts: IAttendee) {
        _.extend(this, opts);
    }

    atLeastOneSocial(): boolean {
        return !!(this.twitter || this.linkedin || this.gplus || this.blog);
    }
}