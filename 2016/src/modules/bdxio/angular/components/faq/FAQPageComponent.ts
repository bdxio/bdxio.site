export class FAQPageComponent implements ng.IDirective {
    public controller: Function = FAQPageController;
    public template: string = `
        <h1>Here we're on the FAQ page</h1>
    `
}
export class FAQPageController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}