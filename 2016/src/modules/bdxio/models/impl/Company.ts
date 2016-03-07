import {ICompany} from "../int/ICompany";

export class Company implements ICompany {
    active: string;
    type: string;
    name: string;

    imgSrc: string;
    website: string;
    description: string;

    imgHeight: string;
    footerImgSrc: string;
    footerImgHeight: string;

    constructor(opts: ICompany) {
        _.extend(this, opts);
    }

    get imgStyle() { return this.imgHeight?"height: "+this.imgHeight+"px":""; }
    get footerImgStyle() { return this.footerImgHeight?"height: "+this.footerImgHeight+"px":""; }
}
