export class HomePageComponent implements ng.IDirective {
    public controller: Function = HomePageController;
    public template: string = `
        <welcome-content></welcome-content>
        <news-list></news-list>
        <summary-content></summary-content>
        <location-content></location-content>
    `
}
export class HomePageController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}