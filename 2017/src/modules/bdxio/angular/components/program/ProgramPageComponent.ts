import { ICFPEvent } from '../../../models/int/ICFPEvent';
import { ICFPPresentation } from '../../../models/int/ICFPPresentation';
import { IConfig, ISharedModel, ITalkAssets } from '../../../models/int/ISharedModel';
import * as moment from 'moment';
import * as _ from 'lodash';
import { ProgramOptions } from './ProgramOptions';
import { ICFPDay } from '../../../models/int/ICFPDay';
import IHttpService = angular.IHttpService;
import ILocationService = angular.ILocationService;

export class ProgramPageComponent implements ng.IDirective {
    public controller: Function = ProgramPageController;
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;
    public template: string = `
    <section style="padding: 10px">
        <h1 class="section-title text-primary inner-space-left-15">Programme BDX.IO 2017</h1>
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

    public static $inject: Array<string> = ['ISharedModel', '$http', '$location'];

    public event: ICFPEvent;
    public presentations: Array<ICFPPresentation>;
    public config: IConfig;
    public options: ProgramOptions;

    public now: moment.Moment = moment();

    public constructor(private sharedModel: ISharedModel, private $http: IHttpService, private $location: ILocationService) {
        sharedModel.dataLoaded.then(() => {
            this.options = sharedModel.data.cfpProgramOptions;
            this.config = sharedModel.data.config;
            this.event = this.enrichWithAssets(sharedModel.data.event, sharedModel.data.talkAssets);
            this.presentations = _.values<ICFPPresentation>(sharedModel.data.presentations);
        });
    }

    public isTalksListPublished() {
        if (this.$location.search().forceTalksList) return true;
        if (this.$location.search().forceCfpProgram) return false;
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

    private enrichWithAssets(event: ICFPEvent, talkAssets: _.Dictionary<ITalkAssets>): ICFPEvent {
        event.days = _.map(event.days, (day: ICFPDay) => {
            day.schedules = _.map(day.schedules, (prez: ICFPPresentation) => {
                prez.assets = talkAssets[prez.id];
                return prez;
            });
            return day;
        });
        return event;
    }
}