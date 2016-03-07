import IPromise = angular.IPromise;

interface ISpeaker {
    firstName: string;
    lastName: string;
    bio: string;

    company: string;
    companyLogo: string;
    companyLogoStyle?: { "background-color": string };

    avatarUrl: string;
    twitter: string;
    linkedin: string;
    gplus: string;

    talk1: string;
    talk2: string;
    talks: string[];
}

export class Speaker implements ISpeaker {
    firstName: string;
    lastName: string;
    bio: string;

    company: string;
    companyLogo: string;
    companyLogoStyle: { "background-color": string };

    avatarUrl: string;
    twitter: string;
    linkedin: string;
    gplus: string;

    talk1: string;
    talk2: string;
    talks: string[];

    constructor(opts: ISpeaker) {
        _.extend(this, opts);
    }
}

export interface ICompany {
    active: string;
    type: string;
    name: string;

    imgSrc: string;
    website: string;
    description: string;

    imgHeight: string;
    footerImgSrc: string;
    footerImgHeight: string;

    imgStyle?: string;
    footerImgStyle?: string;
}

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

export interface CompaniesByType {
    type: string,
    companies: Company[];
    activeCount: number;
    inactiveCount: number;
}

export interface TypedCompaniesByType {
    [companyType:string]: CompaniesByType
}

export interface ISharedModelData {
    orgas?: any;
    jurys?: any;
    speakers?: Speaker[];
    partners?: TypedCompaniesByType;
    news?: any;
    friends?: any;
    daySchedule?: any;
}

export interface ISharedModel {
    data: ISharedModelData;
    dataLoaded: IPromise<void>;
}