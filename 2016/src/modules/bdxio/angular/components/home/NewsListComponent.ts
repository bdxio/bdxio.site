import {ISharedModel} from "../../../models/int/ISharedModel";
import {INews} from "../../../models/int/INews";
export class NewsListComponent implements ng.IDirective {
    public controller: Function = NewsListController;
    public template: string = `
        <ul class="content-list-news">
            <carousel elements="$ctrl.availableNews">
                <li class="item-new" ng-repeat="newsItem in $ctrl.availableNews">
                    <div class="container-img">
                        <img ng-src="{{ newsItem.thumbnail }}" err-src="https://i.ytimg.com/vi/GtAfp55gBeQ/maxresdefault.jpg">
                    </div>
    
                    <div class="content-title-new">
                       <span class="date-new text-white"><i class="fa fa-calendar-o space-right-5"></i> Billet du {{::newsItem.date}}</span>
                       <h3 class="text-white">{{::newsItem.title}}</h3>
                       <button ng-morph-modal="$ctrl.createMorphModalSettingsFor(newsItem)" class="btn btn-primary btn-lg has-icon-left"><i class="fa fa-eye"></i>Lire l’article</button>
                    </div>
                </li>
            </carousel>
        </ul>
    `;
}
export class NewsListController {

    public static $inject: Array<string> = ['ISharedModel'];

    public availableNews: Array<INews>;

    constructor(sharedModel: ISharedModel) {
        sharedModel.dataLoaded.then(() => {
            this.availableNews = sharedModel.data.news;
        });
    }

    public createMorphModalSettingsFor(news: INews) {
        var settings = {
            closeEl: '.close',
            target: 'body',
            modal: {
                template: `
            <div class="modal-morph">
              <span class="glyphicon glyphicon-remove close"></span>
              <div class="row">
                <div class="col-md-12 header-modal">
                    <div class="row">
                        <h3 class="col-md-8 text-white highlight-text-bold force-inner-space-left-30 title">${news.title}</h3>
                        <div class="col-md-4 text-right">
                            <span class="date-new text-white inner-space-right-15"><i class="fa fa-calendar-o space-right-5"></i> Billet du ${news.date}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 content-modal">
                    <div class="col-md-12">
                        <p>${news.content}</p>
                        ${news.picture?"<br><img src=\""+news.picture+"\" style=\""+news.pictureStyles+"\">":""}
                    </div>
                </div>
              </div>
              <!-- <div class="col-md-12 footer-modal">
                      <button class="btn btn-secondary btn-md has-icon-left float-left"><i class="fa fa-angle-left"></i>${news.title}</button>
                      <button class="btn btn-secondary btn-md has-icon-right float-right">${news.title}<i class="fa fa-angle-right"></i></button>
              </div> !-->
            </div>`,
                // position: {
                //     top: '10%',
                //     left: '15%'
                // },
                fade: true
            }
        };
        return settings;
    }
}