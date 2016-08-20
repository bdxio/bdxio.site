import {ICFPEventModel} from "../../../models/int/ICFPEventModel";
import {ICFPEvent} from "../../../models/int/ICFPEvent";

export class ProgramPageComponent implements ng.IDirective {
    public controller:Function = ProgramPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="wrapper">
        <h1 class="section-title text-primary">Programme BDX.IO 2016</h1>
        <cfp-program event="$ctrl.event"></cfp-program>
    </section>
    `
}

export class ProgramPageController {

    public static $inject:Array<string> = ['ICFPEventModel'];
    private event:ICFPEvent;

    public constructor(private cfpEventModel:ICFPEventModel) {
        this.event = cfpEventModel.build('BDX I/O 2016', 'http://cfp.devoxx.fr/api/conferences/DevoxxFR2016/schedules/');
    }
}