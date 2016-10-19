import {CFPPresentation} from "./CFPPresentation";
import {ILivestreamChannel} from "../int/ILivestreamChannel";
export class LivestreamChannel implements ILivestreamChannel {

    public roomId:string;
    public roomName:string;
    public mainRoom:boolean = false;
    public url:string;
    public talk:CFPPresentation;
    public nextTalk:CFPPresentation;

    public constructor(roomId:string, roomName:string, mainRoom:boolean, url:string) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.mainRoom = mainRoom;
        this.url = url;
    }
}
