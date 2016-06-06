import {INews} from "../int/INews";

export class News implements INews {
    id: number;

    published: number;
    title: string;
    date: string;
    content: string;

    thumbnail:string;
    picture: string;
    pictureStyles: string;
    
    constructor(opts: INews) {
        _.extend(this, opts);
    }
}