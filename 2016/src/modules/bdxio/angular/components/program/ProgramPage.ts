import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {CFPEvent} from "../../../models/impl/CFPEvent";
import {CFPDay} from "../../../models/impl/CFPDay";
import {ICFPDay} from "../../../models/int/ICFPDay";
import {CFPPresentation} from "../../../models/impl/CFPPresentation";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import {Speaker} from "../../../models/impl/Speaker";
import {CFPSpeaker} from "../../../models/impl/CFPSpeaker";
import {ICFPSpeaker} from "../../../models/int/ICFPSpeaker";
import {CFPSlot} from "../../../models/impl/CFPSlot";
export class ProgramPageComponent implements ng.IDirective {
    public controller:Function = ProgramPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public template:string = `
    <section class="faq wrapper">
        <div class="row">
            <cfp-program event="$ctrl.event"></cfp-program>
       </div>
    </section>
    `
}
export class ProgramPageController {

    public static $inject:Array<string> = ['$http', '$q'];
    private event:ICFPEvent;

    constructor(private $http:ng.IHttpService, $q:ng.IQService) {

        this.event = new CFPEvent();
        this.event.name = 'BDX I/O 2016';
        $http.get('http://cfp.devoxx.fr/api/conferences/DevoxxFR2016/schedules/').then((days:any) => {

            var promises = [];
            this.event.days = _.map(days.data.links, (day:any) => {

                var cfpDay = new CFPDay();
                cfpDay.title = day.title;
                cfpDay.href = day.href;

                var promise = $http.get(cfpDay.href);
                promises.push(promise);

                promise.then((schedules:any) => {
                    cfpDay.schedules = _.chain(schedules.data.slots)
                        .map((slot:any) => {
                            if (slot.break) {
                                return this.buildBreak(slot);
                            } else if (slot.talk) {
                                return this.buildTalk(slot);
                            } else {
                                return null;
                            }
                        })
                        .filter((cfpPresentation) => cfpPresentation != null)
                        .value();
                });

                return cfpDay;
            });

            $q.all(promises).then(() => {
                this.event.days = _.chain(this.event.days)
                    .map((day:CFPDay) => {
                        day.date = day.schedules[0] ? day.schedules[0].from : null;
                        day.tracks = _.chain(day.schedules).map('track').uniq().filter((track) => track != undefined).value();
                        day.rooms = _.chain(day.schedules).map('room').uniq().filter((track) => track != undefined).value();
                        day.slots = _.chain(day.schedules)
                            .groupBy((cfpPresentation:ICFPPresentation) => cfpPresentation.from)
                            .values()
                            .map((cfpPresentations:Array<ICFPPresentation>) => {
                                var cfpSlot = new CFPSlot();
                                cfpSlot.from = _.first(cfpPresentations) ? _.first(cfpPresentations).from : null;
                                cfpSlot.presentations = _.map(day.rooms, (room:string) => _.find(cfpPresentations, {room: room}) || new CFPPresentation());
                                return cfpSlot;
                            })
                            .value();
                        return day;
                    })
                    .sortBy('date')
                    .value();
            });
        });
    }

    private buildBaseSlot(slot:any) {
        var cfpPresentation = new CFPPresentation();
        cfpPresentation.room = slot.roomName;
        cfpPresentation.from = new Date(slot.fromTimeMillis);
        cfpPresentation.to = new Date(slot.toTimeMillis);
        return cfpPresentation;
    }

    private buildBreak(slot:any):ICFPPresentation {
        var cfpPresentation = this.buildBaseSlot(slot);
        cfpPresentation.title = slot.break.nameFR || slot.break.nameEN;
        return cfpPresentation;
    }

    private buildTalk(slot:any):ICFPPresentation {
        var cfpPresentation = this.buildBaseSlot(slot);
        cfpPresentation.id = slot.talk.id;
        cfpPresentation.title = slot.talk.title;
        cfpPresentation.track = slot.talk.track;
        cfpPresentation.summary = slot.talk.summary;
        cfpPresentation.speakers = _.map(slot.talk.speakers, (speaker:ICFPSpeaker) => speaker);
        return cfpPresentation;
    }
}