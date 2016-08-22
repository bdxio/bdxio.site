import {ICFPEvent} from "../int/ICFPEvent";
import {CFPEvent} from "./CFPEvent";
import {CFPDay} from "./CFPDay";
import {CFPPresentation} from "./CFPPresentation";
import {ICFPPresentation} from "../int/ICFPPresentation";
import {ICFPSpeaker} from "../int/ICFPSpeaker";
import {CFPSlot} from "./CFPSlot";
import {ICFPEventModel} from "../int/ICFPEventModel";
import IPromise = angular.IPromise;

export class CFPEventModel implements ICFPEventModel {

    public static $inject:Array<string> = ['$http', '$q'];
    private $q:ng.IQService;

    constructor(private $http:ng.IHttpService, $q:ng.IQService) {
        this.$q = $q;
    }

    public build(eventName:string, apiUrl:string):IPromise<ICFPEvent> {

        var defer = this.$q.defer<ICFPEvent>();

        var event = new CFPEvent();
        event.name = eventName;

        this.$http.get(apiUrl).then((days:any) => {

            var promises = [];
            event.days = _.map(days.data.links, (day:any) => {

                var cfpDay = new CFPDay();
                cfpDay.title = day.title;
                cfpDay.href = day.href;

                var promise = this.$http.get(cfpDay.href);
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

            this.$q.all(promises).then(() => {
                event.days = _.chain(event.days)
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

                defer.resolve(event);

            }).catch(() => defer.reject());
        }).catch(() => defer.reject());

        return defer.promise;
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
        cfpPresentation.speakers = _.map(slot.talk.speakers, (speaker:ICFPSpeaker) => {
            return speaker;
        });
        return cfpPresentation;
    }
}