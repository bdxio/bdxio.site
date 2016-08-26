import {ICFPEventModel} from "../../../models/int/ICFPEventModel";
import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ISharedModel} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import * as moment from 'moment';
import {ProgramOptions} from "./ProgramOptions";
import IHttpService = angular.IHttpService;
import {CFPPresentation} from "../../../models/impl/CFPPresentation";
import ILocationService = angular.ILocationService;
import {ICFPSpeaker} from "../../../models/int/ICFPSpeaker";
import {CFPSpeaker} from "../../../models/impl/CFPSpeaker";

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
            if (this.isProgramPublished()) {
                cfpEventModel.build('BDX I/O 2016', 'https://cfp.bdx.io/api/conferences/BdxIO16/schedules').then((_event:ICFPEvent) => {
                    this.event = _event;
                });
            } else if (this.isTalksListPublished()) {
                $http.get('https://gist.githubusercontent.com/walien/0eb62585c46b045ae73bd385adb7a70c/raw/0ee879ca82995d9bc521988a9a0969848859d06e/bdxio.2016.talks.json')
                    .then((response:any) => {
                        this.presentations = _.map(response.data, (cfpPresentation:any) => {
                            var prez = new CFPPresentation();
                            prez.type = cfpPresentation.talkType;
                            angular.extend(prez, cfpPresentation);
                            prez.speakers = _.map(cfpPresentation.speakers, (cfpSpeaker:any) => angular.extend(new CFPSpeaker(), cfpSpeaker));
                            return prez;
                        });
                    });
            }
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