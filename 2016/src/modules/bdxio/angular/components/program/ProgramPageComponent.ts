import {ICFPEventModel} from "../../../models/int/ICFPEventModel";
import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ISharedModel} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import * as moment from 'moment';

export class ProgramPageComponent implements ng.IDirective {
    public controller:Function = ProgramPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="wrapper">
        <h1 class="section-title text-primary">Programme BDX.IO 2016</h1>
        <program presentations="$ctrl.presentations" ng-if="!$ctrl.isProgramPublished() && $ctrl.presentations"></program>
        <cfp-program event="$ctrl.event" ng-if="$ctrl.isProgramPublished()"></cfp-program>
    </section>
    `
}

export class ProgramPageController {

    public static $inject:Array<string> = ['ICFPEventModel', 'ISharedModel'];

    public event:ICFPEvent;
    public presentations:Array<ICFPPresentation>;
    public config:IConfig;
    public now:moment.Moment = moment();

    public constructor(private cfpEventModel:ICFPEventModel, private sharedModel:ISharedModel) {
        cfpEventModel.build('BDX I/O 2016', 'http://cfp-voxxed-lux.yajug.org/api/conferences/voxxeddaylux2016/schedules').then((_event:ICFPEvent) => {
            this.event = _event;
            this.presentations = _.flatten(_.map(_event.days, (day:ICFPDay) => day.schedules));
        });
        sharedModel.dataLoaded.then(() => {
            this.config = sharedModel.data.config;
        });
    }

    public isProgramPublished():boolean {
        if (this.config) {
            return this.config.programPublishingDate && this.now.isAfter(this.config.programPublishingDate);
        }
    }
}