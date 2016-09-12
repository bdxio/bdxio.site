import {ISharedModel} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import IHttpService = angular.IHttpService;
import ILocationService = angular.ILocationService;

export class LiveStreamPageComponent implements ng.IDirective {
    public controller:Function = LiveStreamPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="wrapper">
        <h1 class="section-title text-primary">Livestreaming</h1>
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