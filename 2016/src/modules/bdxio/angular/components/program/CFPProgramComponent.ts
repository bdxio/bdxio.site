import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {CFPPresentation} from "../../../models/impl/CFPPresentation";
import {CFPEvent} from "../../../models/impl/CFPEvent";
export class CFPProgramComponent implements ng.IDirective {

    public controller:Function = CFPProgramController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public scope = {
        event: '='
    };

    public template:string = `
        <div class="row cfp-program">
            <!--<div class="cfp-program-event-title">{{ $ctrl.event.name }}</div>-->

            <div class="cfp-program-filter col-sm-12">
                <div class="row">
                    <!--Filtering bar-->
                    <div class="container-day-selector col-sm-2">
                        <h4 class="text-primary space-left-10">Jours :</h4>
                        <div class="col-sm-12" ng-repeat="day in $ctrl.event.days" ng-click="$ctrl.selectCurrentDay(day, $index)" class="day-selector">
                            J {{ $index + 1 }} - {{ day.date | date: $ctrl.datePattern }}
                        </div>

                        <h4 class="text-primary space-left-10">Salles :</h4>
                        <div class="place-selector" ng-class="{'select' : true}"></div>
                    </div>

                    <div class="container-track-selector col-sm-6" ng-show="$ctrl.currentDay">
                      <h4 class="text-primary space-left-10">Tracks :</h4>
                      <div ng-repeat="track in $ctrl.currentDay.tracks" ng-click="$ctrl.filterByTrack(track)"
                           class="track-selector" ng-class="{'select' : true}">
                           <!-- TODO Add dynamic icon track -->
                           <i class="bdx-design"></i>{{ track }}
                       </div>
                    </div>
                </div>
            </div>

            <div class="container-table-program">
                <!--Rooms columns-->
                <div class="row program-header" ng-show="$ctrl.currentDayIndex">
                    <div class="column col-lg-1 col-sm-3 day ">J {{ $ctrl.currentDayIndex }}</div>
                    <div class="column col-lg-11 col-sm-9">
                        <div class="row hidden-xs">
                            <div class="large-item text-center" ng-repeat="room in $ctrl.currentDay.rooms">
                              <b>{{ ::room }}</b>
                            </div>
                        </div>
                    </div>
                </div>

                <!--Iterate over slots-->
                <div class="row program-content" ng-repeat="slot in $ctrl.currentDay.slots">
                    <div class="col-lg-1 col-xs-3 time">
                        <b><i class="fa fa-clock-o space-right-10"></i>{{ ::slot.from | date:$ctrl.timePattern }}</b>
                    </div>

                    <!--Iterate over all slot's presentations-->
                    <div class="col-lg-11 col-xs-9">
                        <div class="row">
                            <div class="prez large-item  col-xs-12" ng-repeat="prez in slot.presentations | filter: $ctrl.filter">
                                <span ng-show="prez.title">{{ prez.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}
export class CFPProgramController {

    public static $inject:Array<string> = [];

    private event:ICFPEvent;
    private currentDay:ICFPDay;
    private currentDayIndex:number;
    private filter:ICFPPresentation = new CFPPresentation();

    public datePattern:string = 'dd/MM/yyyy';
    public timePattern:string = 'HH:mm';

    public selectCurrentDay(day:ICFPDay, index:number):void {
        this.currentDay = day;
        this.currentDayIndex = index + 1;
        this.filter = new CFPPresentation();
    }

    public filterByTrack(track:string):void {
        this.filter.track = track;
    }
}