import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {CFPPresentation} from "../../../models/impl/CFPPresentation";
import {CFPEvent} from "../../../models/impl/CFPEvent";
import {ProgramOptions} from "./ProgramOptions";
import {ISharedModel, ITalkAsset} from "../../../models/int/ISharedModel";
export class CFPProgramComponent implements ng.IDirective {

    public controller:Function = CFPProgramController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public scope = {
        event: '=',
        options: '='
    };

    public template:string = `
        <div class="row cfp-program">
            <div class="cfp-program-filter col-sm-12">

                <!--Filtering bar-->
                <div class="row inner-space-left-20 inner-space-right-20">

                    <div class="col-sm-2">
                        <!--Days-->
                        <div class="row">
                            <h4 class="text-primary space-left-10">Jours</h4>
                            <div class="col-sm-12" ng-repeat="day in $ctrl.event.days" ng-click="$ctrl.selectCurrentDay(day, $index)" class="day-selector">
                                J {{ $index + 1 }} - {{ day.date.toDate() | date: $ctrl.datePattern }}
                            </div>
                        </div>

                        <!--Rooms-->
                        <div class="row" ng-show="$ctrl.currentDay">
                            <h4 class="text-primary space-left-10">Salles</h4>
                            <ui-select ng-model="$ctrl.filter.room" class="col">
                                <ui-select-match placeholder="Salle...">{{ $select.selected }}</ui-select-match>
                                <ui-select-choices repeat="room in $ctrl.currentDay.rooms">
                                    {{ room }}
                                </ui-select-choices>
                            </ui-select>
                        </div>
                    </div>

                    <!--Tracks-->
                    <div class="container-track-selector col-sm-6" ng-show="$ctrl.currentDay">
                      <h4 class="text-primary space-left-10">Tracks</h4>
                      <div ng-repeat="track in $ctrl.currentDay.tracks" ng-click="$ctrl.toggleFilteringByTrack(track)"
                           class="track-selector" ng-class="{'select' : $ctrl.filter.track === track }">
                           <i class="bdx-design"></i>{{ track }}
                       </div>
                    </div>

                    <!--Actions-->
                    <div class="col-sm-2">&nbsp;</div>
                    <div class="col-sm-2" ng-show="$ctrl.currentDay">
                        <button class="btn btn-primary btn-md has-icon-left" ng-click="$ctrl.clearFilter()">
                            <i class="fa fa-refresh"></i>Réinitialiser
                        </button>
                    </div>
                </div>
            </div>

            <div class="container-table-program">
                <!--Rooms columns-->
                <div class="row row-eq-height program-header" ng-show="$ctrl.currentDayIndex">
                    <div class="column col-lg-1 col-md-1 col-sm-1 col-xs-12 no-padding">
                        <div class="day">
                           J {{ $ctrl.currentDayIndex }}
                        </div>
                    </div>
                    <div class="column col-lg-11 col-sm-9 no-padding hidden-xs">
                        <div class="room hidden-xs">
                            <div class="large-item text-center item-room" ng-repeat="room in $ctrl.currentDay.rooms">
                              <b>{{ ::room }}</b>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Iterate over slots-->
                <div class="row row-eq-height program-content" ng-repeat="slot in $ctrl.currentDay.slots">

                    <div class="column col-lg-1 col-md-1 col-sm-1 col-xs-3 inner-space-left-0 inner-space-right-0 time-container">
                        <div class="time">
                            <b><i class="fa fa-clock-o space-right-10"></i>{{ ::slot.from.toDate() | date:$ctrl.timePattern }}</b>
                        </div>
                    </div>

                    <!--Iterate over all slot's presentations-->
                    <div class="column col-lg-11 col-md-11 col-sm-11 col-xs-9" >
                        <div class="row prez-container">
                            <div ng-class="{'empty-slot' : !prez.title, 'overflow': prez.overflow || prez.overflowThrough }" class="prez large-item col-xs-12" ng-repeat="prez in slot.presentations">
                                <div class="content-prez" ng-show="prez.title && $ctrl.matchFilter($ctrl.filter, prez)">
                                    <div ng-morph-modal="$ctrl.createMorphSettingsFor(prez)" ng-if="prez.track">
                                        <cfp-presentation-details presentation="prez" options="$ctrl.options"></cfp-presentation-details>
                                    </div>
                                    <div ng-if="!prez.track">
                                        <cfp-presentation-details presentation="prez" options="$ctrl.options"></cfp-presentation-details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
export class CFPProgramController {

    public static $inject:Array<string> = [ 'ISharedModel' ];

    private event:ICFPEvent;
    private options:ProgramOptions;

    private currentDay:ICFPDay;
    private currentDayIndex:number;
    private filter:ICFPPresentation = new CFPPresentation();

    private datePattern:string = 'dd/MM/yyyy';
    private timePattern:string = 'HH:mm';

    constructor(private sharedModel: ISharedModel) {
        if (this.event.days && this.event.days.length > 0) {
            this.selectCurrentDay(this.event.days[0], 0);
        }
    }

    public selectCurrentDay(day:ICFPDay, index:number):void {
        this.currentDay = day;
        this.currentDayIndex = index + 1;
        this.filter = new CFPPresentation();
    }

    public clearFilter():void {
        this.filter = new CFPPresentation();
    }

    public toggleFilteringByTrack(track:string):void {
        if (track === this.filter.track) {
            delete this.filter.track;
        } else {
            this.filter.track = track;
        }
    }

    public matchFilter(filter:ICFPPresentation, prez:ICFPPresentation):boolean {
        if (_.isEmpty(filter)) return true;
        return _.chain(filter)
            .keys()
            .filter((key) => key.indexOf('$') !== 0)
            .every((key) => {
                return prez[key] && filter[key] && prez[key] === filter[key];
            })
            .value();
    }

    public createMorphSettingsFor(prez:ICFPPresentation):any {
        if (!prez.track) return null;
        var speakers = prez.toSpeakersList();
        var from = prez.from.format('HH:mm');
        var to = prez.to.format('HH:mm');
        return {
            closeEl: '.close',
            target: 'body',
            modal: {
                template: `
                <div class="modal-morph">
                    <span class="glyphicon glyphicon-remove close"></span>
                    <div class="row">
                        <div class="col-md-12 header-modal">
                            <div class="row">
                                <h3 class="col-md-8 text-white highlight-text-bold force-inner-space-left-30 title">${prez.title}</h3>
                                <div class="col-md-4 text-right">
                                    <span class="date-new text-white inner-space-right-15">
                                        <i class="fa fa-users space-right-5"></i> ${speakers}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 content-modal">
                            <div class="col-md-12">
                                <div class="row"><b>Slot : ${from} - ${to}</b></div>
                                <div class="row"><b>Track : ${prez.track}</b></div>
                                <div class="row"><b>Type : ${prez.type}</b></div>
                                <div class="row"><b>Salle : ${prez.room}</b></div>
                                <div class="row">&nbsp;</div>
                                <p class="row">${prez.summary}</p>
                            </div>
                        </div>
                    </div>
                </div>`,
                fade: true
            }
        };
    }

}