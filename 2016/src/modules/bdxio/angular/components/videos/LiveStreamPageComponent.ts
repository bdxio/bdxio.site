import {ISharedModel} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import IHttpService = angular.IHttpService;
import ILocationService = angular.ILocationService;

export class LiveStreamPageComponent implements ng.IDirective {
    public controller:Function = LiveStreamPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="wrapper force-space-bottom-30">
        <h1 class="section-title text-primary space-bottom-20">Livestreaming</h1>

        <div class="row">
            <ul class="col-md-4 list-amphi">
                <li class="all-views" ng-class="{'selected': false}">
                    <button class="btn btn-primary btn-md has-icon-left"><i class="fa fa-cube" aria-hidden="true"></i>Tous les lives</button>
                </li>

                <li class="item-amphi" ng-class="{'selected': false}">
                    <span class="bullet-amphi"><i class="fa fa-university" aria-hidden="true"></i></span>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">Titre du talks</span>
                        <span class="schedule-live"><i class="fa fa-clock-o space-right-5" aria-hidden="true"></i>10h00 > 10h30</span>
                    </div>
                </li>

                <li class="item-amphi" ng-class="{'selected': true}">
                    <span class="bullet-amphi">A</span>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">Titre du talks</span>
                               <span class="schedule-live"><i class="fa fa-clock-o space-right-5" aria-hidden="true"></i>10h00 > 10h30</span>
                    </div>
                </li>

                <li class="item-amphi" ng-class="{'selected': false}">
                    <span class="bullet-amphi">B</span>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">Titre du talks</span>
                        <span class="schedule-live"><i class="fa fa-clock-o space-right-5" aria-hidden="true"></i>10h00 > 10h30</span>
                    </div>
                </li>

                <li class="item-amphi" ng-class="{'selected': false}">
                    <span class="bullet-amphi">C</span>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">Titre du talks super long long long long </span>
                        <span class="schedule-live"><i class="fa fa-clock-o space-right-5" aria-hidden="true"></i>10h00 > 10h30</span>
                    </div>
                </li>

                <li class="item-amphi" ng-class="{'selected': false}">
                    <span class="bullet-amphi">D</span>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">Titre du talks</span>
                        <span class="schedule-live"><i class="fa fa-clock-o space-right-5" aria-hidden="true"></i>10h00 > 10h30</span>
                    </div>
                </li>

                <li class="item-amphi" ng-class="{'selected': false}">
                    <span class="bullet-amphi">E</span>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">Titre du talks</span>
                        <span class="schedule-live"><i class="fa fa-clock-o space-right-5" aria-hidden="true"></i>10h00 > 10h30</span>
                    </div>
                </li>
            </ul>

            <div class="col-md-8">
                <iframe class="space-top-40" width="100%" height="450" src="https://www.youtube.com/embed/Xm2rywDLsEY" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

    </section>
    `
}

export class LiveStreamPageController {

    public static $inject:Array<string> = ['ISharedModel', '$http', '$location'];

    public config:IConfig;

    public constructor(private sharedModel:ISharedModel, private $http:IHttpService, private $location:ILocationService) {
        sharedModel.dataLoaded.then(() => {
            this.config = sharedModel.data.config;
        });
    }
}