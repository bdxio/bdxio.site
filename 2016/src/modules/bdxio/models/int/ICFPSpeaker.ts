import {IHypermediaElement} from "./IHypermediaElement";
export interface ICFPSpeaker extends IHypermediaElement {
    uuid: string;
    name: string;
    firstName:string;
    lastName:string;
    avatarURL: string;
    company:string;
    href:string;

    getAvatarStyle():any;
}