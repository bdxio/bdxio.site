import {ICFPEventModel} from "../../../models/int/ICFPEventModel";
import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ISharedModel} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import * as moment from 'moment';
import {ProgramOptions} from "./ProgramOptions";

export class ProgramPageComponent implements ng.IDirective {
    public controller:Function = ProgramPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="wrapper">
        <h1 class="section-title text-primary">Programme BDX.IO 2016</h1>
        <div ng-if="$ctrl.config">
            <program options="$ctrl.options" presentations="$ctrl.presentations" ng-if="!$ctrl.isProgramPublished() && $ctrl.presentations"></program>
            <cfp-program options="$ctrl.options" event="$ctrl.event" ng-if="$ctrl.isProgramPublished()"></cfp-program>
        </div>
    </section>
    `
}

export class ProgramPageController {

    public static $inject:Array<string> = ['ICFPEventModel', 'ISharedModel'];

    public event:ICFPEvent;
    public presentations:Array<ICFPPresentation>;
    public config:IConfig;
    public options:ProgramOptions;

    public now:moment.Moment = moment();

    public constructor(private cfpEventModel:ICFPEventModel, private sharedModel:ISharedModel) {
        cfpEventModel.build('BDX I/O 2016', 'http://cfp-voxxed-lux.yajug.org/api/conferences/voxxeddaylux2016/schedules').then((_event:ICFPEvent) => {
            this.event = _event;
            this.presentations = _.flatten(_.map(_event.days, (day:ICFPDay) => day.schedules));
        });
        sharedModel.dataLoaded.then(() => {
            this.config = sharedModel.data.config;
        });
        this.options = this.buildOptions();
    }

    public isProgramPublished():boolean {
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
            'Web, HTML5 et UX': 'bdx-settings',
            'Architecture, Performance and Security': 'bdx-server',
            'Alternate Languages': 'bdx-server',
            'DevOps, Agile, Methodology & Tests': 'bdx-tools',
            'Big Data & Analytics': 'bdx-networks',
            'Future & Robotics': 'bdx-phone',
            'Cloud & Scaling': 'bdx-phone',
            'Mobile, IoT': 'bdx-phone',
            'Java, JVM, Javas SE/EE': 'bdx-settings'
        };
        programOptions.typeClasses = {
            'Conference': 'cat-4',
            'Quickie': 'cat-3',
            'Keynote': 'cat-2',
            'Tools-in-Action': 'cat-1'
        };
        return programOptions;
    }
}