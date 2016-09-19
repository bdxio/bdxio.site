import {ICFPEvent} from "../int/ICFPEvent";
import {CFPEvent} from "./CFPEvent";
import {CFPDay} from "./CFPDay";
import {CFPPresentation} from "./CFPPresentation";
import {ICFPPresentation} from "../int/ICFPPresentation";
import {ICFPSpeaker} from "../int/ICFPSpeaker";
import {CFPSlot} from "./CFPSlot";
import {ICFPEventModel} from "../int/ICFPEventModel";
import IPromise = angular.IPromise;
import {CFPSpeaker} from "./CFPSpeaker";
import Dictionary = _.Dictionary;
import {ISharedModel} from "../int/ISharedModel";
import * as moment from 'moment';

export class CFPEventModel implements ICFPEventModel {

    public static $inject:Array<string> = ['$http', '$q'];

    constructor(private $http:ng.IHttpService, private $q:ng.IQService) {
    }

    public buildEvent(eventName:string, apiUrl:string):IPromise<ICFPEvent> {

        var defer = this.$q.defer<ICFPEvent>();

        var event = new CFPEvent();
        event.name = eventName;

        this.$http.get(apiUrl + '/speakers').then((speakersList:any) => {

            var cfpSpeakersList = this.buildCFPSpeakersList(speakersList.data);
            this.$http.get(apiUrl + '/schedules').then((days:any) => {

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
                                    return this.buildTalk(slot, cfpSpeakersList);
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
                                    var lastPrez = _.chain(cfpPresentations).sortBy('to').value();
                                    cfpSlot.to = lastPrez && lastPrez[0] ? lastPrez[0].to : null;
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
        }).catch(() => defer.reject());

        return defer.promise;
    }

    public buildPresentations(apiUrl:string, sharedModel: ISharedModel):IPromise<Array<ICFPPresentation>> {

        var defer = this.$q.defer();
        this.$http.get(apiUrl + '/speakers').then((speakersList:any) => {
            var cfpSpeakersList = this.buildCFPSpeakersList(speakersList.data);
            this.$http.get(apiUrl + '/talks').then((talks:any) => {
                var presentations = _(talks.data)
                    .filter((cfpPresentation:any) => {
                        return _.indexOf(sharedModel.data.config.hiddenTalks, cfpPresentation.id) === -1;
                    })
                    .map((cfpPresentation:any) => {
                        var prez = new CFPPresentation();
                        prez.type = cfpPresentation.talkType;
                        angular.extend(prez, cfpPresentation);
                        prez.speakers = _.map(cfpPresentation.speakers, (cfpSpeaker:any) => this.buildSpeaker(cfpSpeaker, cfpSpeakersList));
                        return prez;
                    }).value();
                defer.resolve(presentations);
            });
        });

        return defer.promise;
    }

    private buildCFPSpeakersList(speakersList) {
        return _.chain(speakersList)
            .map((speaker:any) => {
                var cfpSpeaker = new CFPSpeaker();
                return angular.extend(cfpSpeaker, speaker);
            })
            .keyBy('uuid')
            .value();
    };

    private buildBaseSlot(slot:any) {
        var cfpPresentation = new CFPPresentation();
        cfpPresentation.room = slot.roomName;
        cfpPresentation.from = moment(new Date(slot.fromTimeMillis));
        cfpPresentation.to = moment(new Date(slot.toTimeMillis));
        return cfpPresentation;
    }

    private buildBreak(slot:any):ICFPPresentation {
        var cfpPresentation = this.buildBaseSlot(slot);
        cfpPresentation.title = slot.break.nameFR || slot.break.nameEN;
        return cfpPresentation;
    }

    private buildTalk(slot:any, speakersList:Dictionary<ICFPSpeaker>):ICFPPresentation {
        var cfpPresentation = this.buildBaseSlot(slot);
        cfpPresentation.id = slot.talk.id;
        cfpPresentation.title = slot.talk.title;
        cfpPresentation.track = slot.talk.track;
        cfpPresentation.summary = slot.talk.summary;
        cfpPresentation.type = slot.talk.talkType;
        cfpPresentation.speakers = _.map(slot.talk.speakers, (speaker:any) => this.buildSpeaker(speaker, speakersList));
        return cfpPresentation;
    }

    private buildSpeaker(speaker:any, speakersList:Dictionary<ICFPSpeaker>):ICFPSpeaker {
        if (!speakersList[speaker.uuid]) {
            var cfpSpeaker = new CFPSpeaker();
            cfpSpeaker.name = speaker.name;
            this.$http.get(speaker.link.href).then((fullSpeaker:any) => {
                angular.extend(cfpSpeaker, fullSpeaker.data);
            });
            return cfpSpeaker;
        } else {
            return speakersList[speaker.uuid];
        }
    }
}