import {ISharedModel} from "../../../models/int/ISharedModel";
import {IConfig} from "../../../models/int/ISharedModel";
import {ICFPEvent} from "../../../models/int/ICFPEvent";
import {CFPDay} from "../../../models/impl/CFPDay";
import * as moment from 'moment';
import {ICFPDay} from "../../../models/int/ICFPDay";
import ISCEService = angular.ISCEService;
import {CFPPresentation} from "../../../models/impl/CFPPresentation";
import {ICFPSlot} from "../../../models/int/ICFPSlot";
import {ICFPPresentation} from "../../../models/int/ICFPPresentation";
import ILogService = angular.ILogService;
import {ProgramOptions} from "../program/ProgramOptions";
import IIntervalService = angular.IIntervalService;
import {CFPSlot} from "../../../models/impl/CFPSlot";
import ILocationService = angular.ILocationService;
import {ILivestreamChannel} from "../../../models/int/ILivestreamChannel";
import {LivestreamChannel} from "../../../models/impl/LivestreamChannel";
import IRootScopeService = angular.IRootScopeService;
import IAngularEvent = angular.IAngularEvent;

export class LiveStreamPageComponent implements ng.IDirective {

    public controller:Function = LiveStreamPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public template:string = `
    <section class="wrapper force-space-bottom-30">
        <h1 class="section-title text-primary space-bottom-20">Livestreaming</h1>

        <div class="row" ng-show="!$ctrl.livestreamEnabled">
            <h4><i>Le livestream n'est pas encore disponible pour le moment ! Démarrage le <b>{{ $ctrl.livestreamOpeningDate.toDate() | date: 'dd/MM/yyyy' }} à {{ $ctrl.livestreamOpeningDate.toDate() | date: 'HH:mm' }}</b> pétante !</i></h4>
        </div>

        <div class="row" ng-show="$ctrl.livestreamEnabled">
            <ul class="col-md-4 list-amphi">
                <li class="item-amphi" ng-class="{ 'selected': false, 'soon': channel.nextTalk.title }" ng-click="$ctrl.selectChannel(channel)" ng-repeat="channel in $ctrl.channels">
                    <div class="bullet-amphi">
                        <i ng-if="channel.mainRoom" class="fa fa-university" aria-hidden="true"></i>
                        <span ng-if="!channel.mainRoom">{{ channel.roomName }}</span>
                    </div>
                    <div class="content-infos-amphi" ng-show="channel.talk.title">
                        <span class="title-live-track">{{ channel.talk.title }}</span>
                        <span class="schedule-live" ng-show="channel.talk.speakers">
                            <i class="fa fa-users space-right-5" aria-hidden="true"></i>{{ channel.talk.toSpeakersList() }}
                        </span>
                    </div>
                    <div class="content-infos-amphi" ng-show="channel.nextTalk.title">
                        <span style="color:red">A VENIR</span>
                        <span class="title-live-track">{{ channel.nextTalk.title }}</span>
                        <span class="schedule-live" ng-show="channel.nextTalk.speakers">
                            <i class="fa fa-users space-right-5" aria-hidden="true"></i>{{ channel.nextTalk.toSpeakersList() }}
                        </span>
                    </div>
                </li>
            </ul>

            <div class="col-md-8">
                <div ng-repeat="channel in $ctrl.channels" ng-if="$ctrl.currentChannel === channel">
                    <h2 style="margin-top: 0">
                        {{ $ctrl.currentChannel.roomId }}
                        <span ng-if="$ctrl.currentChannel.talk && $ctrl.currentChannel.talk.title">
                            ({{ $ctrl.currentChannel.talk.from.format('HH:mm') }} - {{ $ctrl.currentChannel.talk.to.format('HH:mm') }})
                        </span>
                    </h2>
                    <iframe width="100%" height="450" ng-src="{{ channel.url }}" frameborder="0" allowfullscreen></iframe>
                </div>

                <div class="live-desc-container" ng-if="$ctrl.currentChannel && $ctrl.currentChannel.talk && $ctrl.currentChannel.talk.title">
                    <div class="row">

                        <div class="col-md-3">
                            <ul class="container-avatar-speaker">
                                <li class="avatar-speaker" ng-repeat="speaker in $ctrl.currentChannel.talk.speakers"
                                    ng-style="speaker.getAvatarStyle()"></li>
                            </ul>
                        </div>

                        <div class="col-md-5">
                           <h4 class="text-secondary space-top-0">{{ $ctrl.currentChannel.talk.title }}</h4>
                           <h4 class="text-primary space-top-0">{{ $ctrl.currentChannel.talk.toSpeakersList() }}</h4>
                           <p>{{ $ctrl.currentChannel.talk.summary }}</p>
                        </div>

                         <div class="col-md-4">
                            <h4 class="prez-title-track small-title" ng-if="$ctrl.currentChannel.talk.track">
                                <i ng-class="$ctrl.options.trackClasses[$ctrl.currentChannel.talk.track]"></i>
                                <label>{{ $ctrl.currentChannel.talk.track }}</label>
                            </h4>
                            <span class="prez-type" ng-class="$ctrl.options.typeClasses[$ctrl.currentChannel.talk.type]">
                                {{ $ctrl.currentChannel.talk.type }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    `
}

export class LiveStreamPageController {

    public static $inject:Array<string> = ['ISharedModel', '$sce', '$log', '$location', '$interval', '$rootScope'];

    public forceNow:moment.Moment;
    public livestreamEnabled:boolean;
    public livestreamOpeningDate:moment.Moment;

    public options:ProgramOptions;
    public currentChannel:ILivestreamChannel;
    public channels:Array<ILivestreamChannel> = [];

    public constructor(private sharedModel:ISharedModel,
                       private $sce:ISCEService,
                       private $log:ILogService,
                       private $location:ILocationService,
                       private $interval:IIntervalService,
                       private $rootScope:IRootScopeService) {
        sharedModel.dataLoaded.then(() => {
            this.channels = _.map(sharedModel.data.config.livestreamChannels, (rawChannel:any) => {
                return new LivestreamChannel(rawChannel.roomId, rawChannel.roomName, rawChannel.mainRoom, this.$sce.trustAsResourceUrl(rawChannel.url))
            });
            this.options = sharedModel.data.cfpProgramOptions;
            this.updateModel(sharedModel);
            $interval(() => this.updateModel(sharedModel), 5000);
        });
        var forceNowParam = this.$location.search().forceNow;
        this.forceNow = forceNowParam && forceNowParam !== '' ? moment(forceNowParam) : null;
        this.$rootScope.$on('livestream:forcenow', (event:IAngularEvent, now:any) => {
            this.$log.log('received forcenow event. now = ' + now);
            this.forceNow = moment(now);
        });
    }

    public updateModel(sharedModel:ISharedModel) {
        var now = this.forceNow || moment();
        this.livestreamOpeningDate = sharedModel.data.config.livestreamOpeningDate;
        this.livestreamEnabled = now.isAfter(sharedModel.data.config.livestreamOpeningDate);
        this.enrichChannelsWithProgram(this.channels, sharedModel.data.event.days, now);
    }

    public enrichChannelsWithProgram(channels:Array<ILivestreamChannel>, days:Array<CFPDay>, now:moment.Moment):void {

        this.$log.info('enriching channels with CFP program, now = ' + now.format());

        var day = _.find(days, (day:CFPDay) => moment(now).startOf('day').isSame(day.date.startOf('day')));
        if (!day) {
            this.$log.error('current day not found');
            return;
        }

        var slot = _.find(day.slots, (slot:ICFPSlot) => {
            return slot.from.isBefore(now) && slot.to.isSameOrAfter(now);
        });
        if (!slot) return;

        _.each(channels, (channel:ILivestreamChannel) => {
            var talk = _.find(slot.presentations, (prez:ICFPPresentation) => prez.room === channel.roomId);
            if (!talk.id && !channel.nextTalk) {
                var nextSlot = _.first(_.chain(day.slots)
                    .sortBy('from')
                    .filter((slot:ICFPSlot) => slot.from.isAfter(now))
                    .value());
                if (nextSlot) {
                    channel.nextTalk = _.first(_.chain(nextSlot.presentations)
                        .filter((prez:ICFPPresentation) => !_.isUndefined(prez))
                        .filter((prez:ICFPPresentation) => prez.room === channel.roomId)
                        .value());
                }
            }
            if (talk && talk !== channel.talk) channel.talk = talk;
        });
    }

    public selectChannel(channelDef:ILivestreamChannel):void {
        this.currentChannel = channelDef;
    }
}