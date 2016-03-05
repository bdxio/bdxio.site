export class NewsListComponent implements ng.IDirective {
    public controller: Function = NewsListController;
    public template: string = `
        <ul class="content-list-news">
            <li class="item-new" ng-repeat="newsItem in $ctrl.availableNews">
                <img src="https://i.ytimg.com/vi/GtAfp55gBeQ/maxresdefault.jpg">
                <div class="content-title-new">
                   <span class="date-new text-white"><i class="fa fa-calendar-o space-right-5"></i> Billet du 00.00.2016</span>
                   <h3 class="text-white">{{::newsItem.title}}</h3>
                   <button class="btn btn-primary btn-lg has-icon-left"><i class="fa fa-eye"></i>Lire l’article</button>
                </div>
            </li>
        </ul>
    `
}
export class NewsListController {
    public static $inject: Array<string> = [];

    public availableNews: Array<{ title }> = [
        { title: "Je déclare le CFP...OUVERT !"},
        { title: "Une nouvelle affiche pour votre machine à café"}
    ];

    constructor() {
    }
}