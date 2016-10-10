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
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ITypedCompaniesByType} from "../../../models/int/ISharedModel";

export class ProgramPrintPageComponent implements ng.IDirective {

    public controller:Function = ProgramPrintPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public template:string = `
    <section>
        <div class="row page-break">
            <div class="col-sm-6">
              <div class="row">
                <span class="logo-event-print"></span>
                 <div class="col-sm-12">
                  <h1 class="section-title text-primary text-center">PROGRAMME</h1>
                 </div>
                 <div class="col-sm-12">
                    <h5 class="section-title text-secondary text-center">Merci à nos sponsors :</h1>
                 </div>
                 <ul class="col-sm-12" ng-repeat="(type, partners) in $ctrl.partnersByType">
                    {{ type }}
                    <li ng-repeat="company in partners.companies">
                        <img style="width: 50px" ng-src="{{ company.imgSrc }}">
                    </li>
                 </ul>
              </div>
              <div class="row">
                <div class="voxxrin-qrcode">&nbsp;</div>
              </div>
            </div>
        </div>

        <table class="cfp-program-print">
            <thead>
                <tr>
                    <th class="slot-print">Slot</th>
                    <th class="room-print" ng-repeat="room in $ctrl.currentDay.rooms">
                        {{ room }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="slot in $ctrl.currentDay.slots"">
                    <td class="time-slot-print">{{ slot.from.toDate() | date: $ctrl.timePattern }} - {{ slot.to.toDate() | date: $ctrl.timePattern }}</td>
                    <td ng-repeat="prez in slot.presentations" rowspan="{{ prez.overflowThrough && !prez.isBreak ? 3 : 1 }}" ng-hide="prez.overflow"
                        ng-class="$ctrl.talkClasses(prez)">
                        <div class="slot-content" ng-show="prez.title">
                            <p class="title">{{ prez.title }}</p>
                            <div ng-show="!prez.isBreak">
                                <div class="name-speaker-print">{{ prez.toSpeakersList() }}</div>
                                <div class="name-track-print" ng-class="$ctrl.options.trackClasses[prez.track]"></div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>


        <div class="container-legend">
               <!-- Types Legend -->
                <ul class="legend-list">
                    <li ng-repeat="(type, class) in $ctrl.options.typeClasses" ng-class="class"><span class="bullet-type"></span> {{ type }}</li>
                </ul>

                <!-- Tracks Legend -->
                <ul class="legend-tracks">
                    <li ng-repeat="(track, class) in $ctrl.options.trackClasses" ng-class="class">{{ track }}</li>
                </ul>
        </div>
    </section>
    `
}

export class ProgramPrintPageController {

    public static $inject:Array<string> = ['ISharedModel'];

    public event:ICFPEvent;
    public currentDay:ICFPDay;
    public config:IConfig;
    private partnersByType:ITypedCompaniesByType;
    public options:ProgramOptions;

    public timePattern:string = 'HH:mm';
    public now:moment.Moment = moment();

    public constructor(private sharedModel:ISharedModel) {
        this.options = ProgramOptions.buildDefault();
        sharedModel.dataLoaded.then(() => {
            this.partnersByType = sharedModel.data.partners;
            this.event = sharedModel.data.event;
            this.currentDay = this.event.days[0];
        });
    }

    public talkClasses(prez:ICFPPresentation):any {
        var classes = [];
        if (prez && prez.isBreak) {
            classes.push('break')
        }
        if (prez && prez.type && this.options) {
            classes.push(this.options.typeClasses[prez.type])
        }
        return classes;
    }
}