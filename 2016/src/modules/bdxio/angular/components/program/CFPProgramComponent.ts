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
        <div class="cfp-program">
            <div class="cfp-program-event-title">{{ $ctrl.event.name }}</div>
            <div class="cfp-program-filter">
                <!--Filtering bar-->
                <div ng-repeat="day in $ctrl.event.days" ng-click="$ctrl.selectCurrentDay(day, $index)" class="day-selector">
                    J {{ $index + 1 }} - {{ day.date | date: $ctrl.datePattern }}
                </div>
                <div ng-repeat="track in $ctrl.currentDay.tracks" ng-click="$ctrl.filterByTrack(track)" class="track-selector" ng-show="$ctrl.currentDay">
                    {{ track }}
                </div>
            </div>
            <div width="100%">
                <!--Rooms columns-->
                <div class="row program-header">
                    <div class="column" ng-show="$ctrl.currentDayIndex">J {{ $ctrl.currentDayIndex }}</div>
                    <div class="column" ng-repeat="room in $ctrl.currentDay.rooms">
                        <b>{{ ::room }}</b>
                    </div>
                </div>
                <!--Iterate over slots-->
                <div class="row program-content" ng-repeat="slot in $ctrl.currentDay.slots">
                    <div class="column">
                        <b>{{ ::slot.from | date:$ctrl.timePattern }}</b>
                    </div>
                    <!--Iterate over all slot's presentations-->
                    <div class="column" ng-repeat="prez in slot.presentations | filter: $ctrl.filter">
                        <span ng-show="prez.title">{{ prez.title }}</span> |
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