export class WelcomeContentComponent implements ng.IDirective {
    public controller: Function = WelcomeContentController;
    public template: string = `
        <div>
        Welcome to BDX I/O 2016
        </div>
    `
}
export class WelcomeContentController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}