export class FAQPageComponent implements ng.IDirective {
    public controller: Function = FAQPageController;
    public template: string = `
    <section class="faq-content wrapper">
            <div class="row">
                <div class="col-md-12">

                </div>
            </div>
    </section>

    `
}
export class FAQPageController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}