import {IFriend} from "../int/IFriend";

export class Friend implements IFriend {
    stdImage: string;
    stdHoverImage: string;
    stdImageHeight: string;
    stdImageWidth: string;

    mobileImage: string;
    mobileHoverImage: string;
    mobileImageHeight: string;
    mobileImageWidth: string;

    url: string;
    label: string;
    itemType: string;
    
    constructor(opts: IFriend) {
        _.extend(this, opts);
    }
}