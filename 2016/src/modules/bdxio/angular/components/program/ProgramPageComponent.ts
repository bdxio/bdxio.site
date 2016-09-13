import {ICFPEventModel} from "../../../models/int/ICFPEventModel";
import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {ISharedModel} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import * as moment from 'moment';
import * as _ from 'lodash';
import {ProgramOptions} from "./ProgramOptions";
import IHttpService = angular.IHttpService;
import ILocationService = angular.ILocationService;

export class ProgramPageComponent implements ng.IDirective {
    public controller:Function = ProgramPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="wrapper">
        <h1 class="section-title text-primary">Programme BDX.IO 2016</h1>
        <div ng-if="$ctrl.config">
            <program options="$ctrl.options" presentations="$ctrl.presentations" ng-if="$ctrl.isTalksListPublished() && $ctrl.presentations"></program>
            <cfp-program options="$ctrl.options" event="$ctrl.event" ng-if="$ctrl.isProgramPublished() && $ctrl.event"></cfp-program>
            <div class="row" ng-if="!$ctrl.isTalksListPublished() && !$ctrl.isProgramPublished()">
                <h3>Un peu de patience ... </h3>
            </div>
        </div>
    </section>
    `
}

export class ProgramPageController {

    public static $inject:Array<string> = ['ICFPEventModel', 'ISharedModel', '$http', '$location'];

    public event:ICFPEvent;
    public presentations:Array<ICFPPresentation>;
    public config:IConfig;
    public options:ProgramOptions;

    public now:moment.Moment = moment();

    public constructor(private cfpEventModel:ICFPEventModel, private sharedModel:ISharedModel, private $http:IHttpService, private $location:ILocationService) {
        this.options = this.buildOptions();
        sharedModel.dataLoaded.then(() => {
            this.config = sharedModel.data.config;
            this.event = sharedModel.data.event;
            this.presentations = _.values<ICFPPresentation>(sharedModel.data.presentations);
        });
    }

    public isTalksListPublished() {
        if (this.$location.search().forceTalksList) return true;
        if (this.config) {
            return this.config.talksListPublishingDate && this.now.isAfter(this.config.talksListPublishingDate)
                && this.config.programPublishingDate && this.now.isBefore(this.config.programPublishingDate);
        }
    }

    public isProgramPublished() {
        if (this.$location.search().forceCfpProgram) return true;
        if (this.config) {
            return this.config.programPublishingDate && this.now.isAfter(this.config.programPublishingDate);
        }
    }

    private buildOptions():ProgramOptions {
        var programOptions = new ProgramOptions();
        programOptions.trackClasses = {
            //'Java, JVM, Javas SE/EE': 'bdx-design',
            //'Java, JVM, Javas SE/EE': 'bdx-server',
            //'Java, JVM, Javas SE/EE': 'bdx-phone',
            //'Java, JVM, Javas SE/EE': 'bdx-tools',
            //'Java, JVM, Javas SE/EE': 'bdx-networks',
            //'Java, JVM, Javas SE/EE': 'bdx-settings',
            'Internet of things & emerging markets': 'bdx-networks',
            'Tooling': 'bdx-tools',
            'Frontend Web, Mobile & Video games': 'bdx-phone',
            'Design, UI & UX': 'bdx-design',
            'Conception, Architecture & Dev practices': 'bdx-settings',
            'Backends, Cloud & Big Data': 'bdx-server'
        };
        programOptions.typeClasses = {
            'Conference': 'cat-4',
            'Lightning talk': 'cat-3',
            'Keynote': 'cat-2',
            "Hand's on Labs": 'cat-1'
        };
        return programOptions;
    }
}