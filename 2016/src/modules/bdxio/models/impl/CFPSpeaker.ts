import {ICFPSpeaker} from "../int/ICFPSpeaker";
export class CFPSpeaker implements ICFPSpeaker {

    uuid:string;
    name:string;
    firstName:string;
    lastName:string;
    avatarURL:string;
    company:string;
    href:string;

    public getAvatarStyle():any {
        return {'background-image': 'url(' + this.avatarURL + ')'};
    }

    public fullName():string {
        if (!this.firstName || !this.lastName) return '';
        var firstName = this.firstName.substring(0, 1).toUpperCase() + this.firstName.substring(1).toLowerCase();
        return firstName + ' ' + this.lastName.toUpperCase();
    }
}