import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {CFPPresentation} from "../../../models/impl/CFPPresentation";
export class CFPProgramComponent implements ng.IDirective {

    public controller:Function = CFPProgramController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public scope = {
        event: '='
    };

    public template:string = `
        <div class="cfp-program">
            <div ng-repeat="day in $ctrl.event.days" ng-click="$ctrl.selectCurrentDay(day, $index)" class="day-selector">
                J {{ $index + 1 }} - {{ day.date | date: $ctrl.datePattern }}
            </div>
            <div width="100%">
                <div class="row program-header">
                    <div class="column" ng-show="$ctrl.currentDayIndex">J {{ $ctrl.currentDayIndex }}</div>
                    <div class="column" ng-repeat="room in $ctrl.currentDay.rooms">
                        <b>{{ ::room }}</b>
                    </div>
                </div>
                <div class="row program-content" ng-repeat="slot in $ctrl.currentDay.slots">
                    <div class="column">
                        <b>{{ ::slot.from | date:$ctrl.timePattern }}</b>
                    </div>
                    <div class="column" ng-repeat="prez in slot.presentations">
                        <span ng-show="prez.title">{{ prez.title }} ({{ prez.room }})</span> |
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

    public datePattern:string = 'dd/MM/yyyy';
    public timePattern:string = 'HH:mm';

    public selectCurrentDay(day:ICFPDay, index:number):void {
        this.currentDay = day;
        this.currentDayIndex = index + 1;
    }
}