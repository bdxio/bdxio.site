export class LocationContentComponent implements ng.IDirective {
    public controller: Function = LocationContentController;
    public template: string = `
        <div>
        Location here
        </div>
    `
}
export class LocationContentController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}