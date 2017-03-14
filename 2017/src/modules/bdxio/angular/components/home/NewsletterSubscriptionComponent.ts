export class NewsletterSubscriptionComponent implements ng.IDirective {
    public controller: Function = NewsletterSubscriptionController;
    public template: string = `
        <div>
        Subscribe to newsletter here
        </div>
    `
}
export class NewsletterSubscriptionController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}