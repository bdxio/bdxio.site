import {ICFPEventModel} from "../../../models/int/ICFPEventModel";
import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {ICFPDay} from "../../../models/int/ICFPDay";

export class ProgramPageComponent implements ng.IDirective {
    public controller:Function = ProgramPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="wrapper">
        <h1 class="section-title text-primary">Programme BDX.IO 2016</h1>
        <cfp-program event="$ctrl.event"></cfp-program>
        <!--<program ng-if="$ctrl.presentations" presentations="$ctrl.presentations"></program>-->
    </section>
    `
}

export class ProgramPageController {

    public static $inject:Array<string> = ['ICFPEventModel'];

    public event:ICFPEvent;
    public presentations:Array<ICFPPresentation>;

    public constructor(private cfpEventModel:ICFPEventModel) {
        cfpEventModel.build('BDX I/O 2016', 'http://cfp-voxxed-lux.yajug.org/api/conferences/voxxeddaylux2016/schedules').then((_event:ICFPEvent) => {
            this.event = _event;
            this.presentations = _.flatten(_.map(_event.days, (day:ICFPDay) => day.schedules));
        });
    }
}