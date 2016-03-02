export class SummaryContentComponent implements ng.IDirective {
    public controller: Function = SummaryContentController;
    public template: string = `
        <div>
        Summary here
        </div>
    `
}
export class SummaryContentController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}