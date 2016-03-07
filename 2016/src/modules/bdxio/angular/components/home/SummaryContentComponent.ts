export class SummaryContentComponent implements ng.IDirective {
    public controller: Function = SummaryContentController;
    public template: string = `
        <section class="summary-content wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="text-primary">Thèmes de la conférence</h1>
                </div>
            </div>
        </section>
    `
}
export class SummaryContentController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}