export class NewsListComponent implements ng.IDirective {
    public controller: Function = NewsListController;
    public template: string = `
        La liste des news ici :
        <ul>
            <li ng-repeat="newsItem in $ctrl.availableNews">
                La news avec le titre {{::newsItem.title}}
            </li>
        </ul>
    `
}
export class NewsListController {
    public static $inject: Array<string> = [];

    public availableNews: Array<{ title }> = [
        { title: "News 1" },
        { title: "News 2" }
    ];

    constructor() {
    }
}