import {ICFPSpeaker} from "../int/ICFPSpeaker";
export class CFPSpeaker implements ICFPSpeaker {

    uuid: string;
    name:string;
    firstName:string;
    lastName:string;
    avatarURL:string;
    company:string;
    href:string;

    public getAvatarStyle():any {
        return {'background-image': 'url(' + this.avatarURL + ')'};
    }
}