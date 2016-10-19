import {CFPPresentation} from "../impl/CFPPresentation";
export interface ILivestreamChannel {

    roomId:string;
    roomName:string;
    mainRoom:boolean;
    url:string;
    talk:CFPPresentation;
    nextTalk:CFPPresentation;

}