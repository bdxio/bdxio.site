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
                <li class="item-amphi" ng-class="{ 'selected': false }" ng-click="$ctrl.selectChannel(channel)" ng-repeat="channel in $ctrl.channels">
                    <div class="bullet-amphi">
                        <i ng-if="channel.mainRoom" class="fa fa-university" aria-hidden="true"></i>
                        <span ng-if="!channel.mainRoom">{{ channel.roomName }}</span>
                    </div>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">{{ channel.talk.title }}</span>
                        <span class="schedule-live" ng-show="channel.talk.speakers">
                            <i class="fa fa-users space-right-5" aria-hidden="true"></i>{{ channel.talk.toSpeakersList() }}
                        </span>
                    </div>
                </li>
            </ul>

            <div class="col-md-8">
                <div ng-repeat="channel in $ctrl.channels" ng-if="$ctrl.currentChannel === channel && $ctrl.currentChannel.talk && $ctrl.currentChannel.talk.title">
                    <h2 style="margin-top: 0">
                        {{ $ctrl.currentChannel.roomId }}
                        <span ng-if="$ctrl.currentChannel.talk.title">
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

export class ChannelDef {
    public roomId:string;
    public roomName:string;
    public mainRoom:boolean = false;
    public url:string;
    public talk:CFPPresentation;

    public constructor(roomId:string, roomName:string, mainRoom:boolean, url:string) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.mainRoom = mainRoom;
        this.url = url;
    }
}

export class LiveStreamPageController {

    public static $inject:Array<string> = ['ISharedModel', '$sce', '$log', '$location', '$interval'];

    public now:moment.Moment;
    public livestreamEnabled:boolean;
    public livestreamOpeningDate:moment.Moment;

    public options:ProgramOptions;
    public currentChannel:ChannelDef;
    public channels:Array<ChannelDef> = [
        new ChannelDef("Grand Amphi", "GA", true, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi A", "A", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi B", "B", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi D", "D", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi E", "E", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
    ];

    public constructor(private sharedModel:ISharedModel,
                       private $sce:ISCEService,
                       private $log:ILogService,
                       private $location:ILocationService,
                       private $interval:IIntervalService) {
        this.options = ProgramOptions.buildDefault();
        sharedModel.dataLoaded.then(() => {
            this.updateModel(sharedModel);
            $interval(() => this.updateModel(sharedModel), 10000);
        });
    }

    private computeNow():any {
        var forceNow = this.$location.search().forceNow;
        if (forceNow && forceNow !== '') {
            return moment(forceNow);
        }
        return moment();
    }

    public updateModel(sharedModel:ISharedModel) {
        this.now = this.computeNow();
        this.livestreamOpeningDate = sharedModel.data.config.livestreamOpeningDate;
        this.livestreamEnabled = this.now.isAfter(sharedModel.data.config.livestreamOpeningDate);
        this.enrichChannelsWithProgram(this.channels, sharedModel.data.event.days);
    }

    public enrichChannelsWithProgram(channels:Array<ChannelDef>, days:Array<CFPDay>):void {

        this.$log.info('enriching channels with CFP program, now = ' + this.now.format());

        var day = _.find(days, (day:CFPDay) => this.computeNow().startOf('day').isSame(day.date.startOf('day')));
        if (!day) {
            this.$log.error('current day not found');
            return;
        }

        var slot = _.find(day.slots, (slot:ICFPSlot) => {
            return slot.from.isBefore(this.now) && slot.to.isSameOrAfter(this.now);
        });
        if (!slot) return;

        _.each(channels, (channel:ChannelDef) => {
            var talk = _.find(slot.presentations, (prez:ICFPPresentation) => prez.room === channel.roomId);
            if (talk !== channel.talk) channel.talk = talk;
        });
    }

    private url(url:string) {
        return this.$sce.trustAsResourceUrl(url);
    }

    public selectChannel(channelDef:ChannelDef):void {
        this.currentChannel = channelDef;
    }
}