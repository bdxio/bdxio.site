export class FAQPageComponent implements ng.IDirective {
    public controller: Function = FAQPageController;
    public template: string = `
    <section class="faq-gold-content wrapper">
            <div class="row">
                 <div class="col-sm-12">
                    <h1 class="section-title text-white space-top-40 space-left-50 space-bottom-40">Gold</h1>
                </div>
            </div>
    </section>
    <section class="faq-silver-content wrapper">
            <div class="row">
                 <div class="col-sm-12">
                    <h1 class="section-title text-white space-top-40 space-left-50 space-bottom-40">Silver</h1>
                </div>
            </div>
    </section>
    <section class="faq-bronze-content wrapper">
            <div class="row">
                 <div class="col-sm-12">
                    <h1 class="section-title text-white space-top-40 space-left-50 space-bottom-40">Bronze</h1>
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