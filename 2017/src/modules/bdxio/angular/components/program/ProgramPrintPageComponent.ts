import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {ISharedModel, ICompaniesByType} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import * as moment from 'moment';
import * as _ from 'lodash';
import {ProgramOptions} from "./ProgramOptions";
import IHttpService = angular.IHttpService;
import ILocationService = angular.ILocationService;
import {ICFPDay} from "../../../models/int/ICFPDay";
import {ICFPSlot} from "../../../models/int/ICFPSlot";
import Dictionary = _.Dictionary;

export class ProgramPrintPageComponent implements ng.IDirective {

    public controller:Function = ProgramPrintPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public template:string = `
    <section>
        <div class="row">
            <div class="col-sm-6 first-couv float-right">
             <span class="illu-first-couv"></span>
            </div>

            <div class="col-sm-6">
              <div class="row">
                 <div class="col-sm-12 space-top-20">
                    <h4 class="section-title text-secondary text-center">Merci à nos sponsors :</h1>
                 </div>
                 <ul class="col-sm-12 partner-print {{ type }}" ng-repeat="(type, partners) in $ctrl.partnersByType">
                    <h4 class="section-title">{{ type }}</h4>
                    <li ng-repeat="company in partners.companies">
                        <img style="width: 50px" ng-src="{{ company.imgSrc }}">
                    </li>
                 </ul>
              </div>
              <div class="row text-center">
                 <div class="col-sm-12 text-center">
                    <strong>Programme - Voxxrin</strong>
                    <p>https://goo.gl/bjPU4j</p>
                    <div class="voxxrin-qrcode">&nbsp;</div>
                 </div>

                <!-- <div class="col-sm-4 text-center">
                    <strong><i class="fa fa-wifi" aria-hidden="true" style="margin-right: 5px"></i>Wifi - SSID </strong>
                    <h4>REAUMUR</h4>
                    <h6>Ou</h4>
                    <h4>Bordeaux-INP</h4>
                </div>

                 <div class="col-sm-4 text-center">
                   <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
                   <strong>#bdxio</strong><br>
                </div> -->
              </div>

              <div class="row">&nbsp;</div>

              <div class="col-sm-12 text-center">
                <strong>Wifi - Procédure</strong>
              </div>
              <div class="row legal-mentions-print">
                <p style="padding-left: 30px; padding-right: 30px">
                    Les comptes peuvent être utilisés aussi bien sur le wifi REAUMUR que sur le wifi Bordeaux-INP : selon les périphériques, la configuration sur l'un ou l'autre des wifi est plus aisée.
                    Procédure REAUMUR : pour se connecter, choisir le réseau wifi REAUMUR, ouvrir son navigateur, on est automatiquement redirigé vers une page de portail captif : se connecter puis choisir "Conférences/Invités" et cliquer sur le bouton "Selection".
                    Entrer l'identifiant et le mot de passe inscrits sur votre badge. <br>
                    Informations supplémentaires : http://www.u-bordeaux.fr/Vie-des-campus/Services-numeriques/Wifi/REAUMUR
                </p>
              </div>
            </div>
        </div>

        <table class="cfp-program-print" ng-class="{ 'full': $ctrl.fullDisplay }">
            <thead>
                <tr>
                    <th class="slot-print">Slot</th>
                    <th class="room-print" ng-repeat="room in $ctrl.currentDay.rooms">
                        {{ room }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="slot in $ctrl.currentDay.slots" ng-if="!slot.presentations[0].isBreak">
                    <td class="time-slot-print">{{ slot.from.toDate() | date: $ctrl.timePattern }} - {{ slot.to.toDate() | date: $ctrl.timePattern }}</td>
                    <td ng-repeat="prez in slot.presentations" rowspan="{{ prez.overflowThrough && !prez.isBreak ? 2 : 1 }}" ng-hide="prez.overflow"
                        ng-class="$ctrl.talkClasses(prez)">
                        <div class="slot-content" ng-show="prez.title">
                            <div class="title">{{ prez.title }}</div>
                            <div ng-show="!prez.isBreak">
                                <div class="name-speaker-print">{{ prez.toSpeakersList() }}</div>
                                <div class="name-track-print" ng-class="$ctrl.options.tracks[prez.track].cssClass"></div>
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
                    <li ng-repeat="descriptor in $ctrl.footerTracks()" ng-class="descriptor.cssClass">{{ descriptor.label }}</li>
                </ul>
        </div>
    </section>
    `
}

export class ProgramPrintPageController {

    public static $inject:Array<string> = ['ISharedModel', '$location'];

    public event:ICFPEvent;
    public currentDay:ICFPDay;
    public config:IConfig;
    public partnersByType:Dictionary<ICompaniesByType>;
    public options:ProgramOptions;

    public timePattern:string = 'HH:mm';
    public now:moment.Moment = moment();
    public fullDisplay: boolean;

    public constructor(private sharedModel:ISharedModel, private $location:ILocationService) {
        var roomFilter = $location.search().room;
        sharedModel.dataLoaded.then(() => {
            this.options = sharedModel.data.cfpProgramOptions;
            this.partnersByType = sharedModel.data.partners;
            this.event = sharedModel.data.event;
            this.currentDay = this.event.days[0];
            if (roomFilter) {
                this.fullDisplay = true;
                this.currentDay.rooms = _.filter(this.currentDay.rooms, (room:any) => room === this.options.mainRoomName || room === roomFilter);
                this.currentDay.slots = _.map(this.currentDay.slots, (slot:ICFPSlot) => {
                    slot.presentations = _.filter(slot.presentations, (prez:ICFPPresentation) => prez.room === this.options.mainRoomName || prez.room === roomFilter);
                    return slot;
                });
            }
        });
    }

    public talkClasses(prez:ICFPPresentation):any {
        var classes = [];
        if (prez && prez.isBreak) {
            classes.push('break');
        }
        if (prez && prez.isLunch) {
            classes.push('lunch');
        }
        if (prez && prez.type && this.options) {
            classes.push(this.options.typeClasses[prez.type])
        }
        return classes;
    }

    public footerTracks() {
        if (this.options && this.options.tracks) {
            return _(this.options.tracks).keys().map(key => this.options.tracks[key]).uniqBy(descriptor => descriptor.label).value();
        }
        return [];
    }
}