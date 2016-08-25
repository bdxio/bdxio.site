import {IHypermediaElement} from "./IHypermediaElement";
export interface ICFPSpeaker extends IHypermediaElement {
    name: string;
    firstName:string;
    lastName:string;
    avatarUrl: string;
    company:string;
    href:string;
}