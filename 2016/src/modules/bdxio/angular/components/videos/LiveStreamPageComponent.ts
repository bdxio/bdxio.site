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

export class LiveStreamPageComponent implements ng.IDirective {

    public controller:Function = LiveStreamPageController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public template:string = `
    <section class="wrapper force-space-bottom-30">
        <h1 class="section-title text-primary space-bottom-20">Livestreaming</h1>

        <div class="row">
            <ul class="col-md-4 list-amphi">
                <li class="item-amphi" ng-class="{ 'selected': false }" ng-click="$ctrl.selectChannel(channel)" ng-repeat="channel in $ctrl.channels">
                    <div class="bullet-amphi">
                        <i ng-if="channel.mainRoom" class="fa fa-university" aria-hidden="true"></i>
                        <span ng-if="!channel.mainRoom">{{ channel.roomName }}</span>
                    </div>
                    <div class="content-infos-amphi">
                        <span class="title-live-track">{{ channel.talk.title }}</span>
                        <span class="schedule-live">
                            <i class="fa fa-users space-right-5" aria-hidden="true"></i>{{ channel.talk.toSpeakersList() }}
                        </span>
                    </div>
                </li>
            </ul>

            <div class="col-md-8">
                <div ng-repeat="channel in $ctrl.channels" ng-if="$ctrl.currentChannel === channel">
                    <iframe class="space-top-40" width="100%" height="450"
                            ng-src="{{ channel.url }}" frameborder="0" allowfullscreen>
                    </iframe>
                </div>

                <div ng-if="$ctrl.currentChannel && $ctrl.currentChannel.talk">
                    <h4>{{ $ctrl.currentChannel.talk.toSpeakersList() }} - {{ $ctrl.currentChannel.talk.title }}</h4>
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

    public static $inject:Array<string> = ['ISharedModel', '$sce', '$log'];

    public currentChannel:ChannelDef;
    public channels:Array<ChannelDef> = [
        new ChannelDef("Grand Amphi", "GA", true, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi A", "A", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi B", "B", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        //new ChannelDef("Amphi C", "C", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi D", "D", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
        new ChannelDef("Amphi E", "E", false, this.url("https://www.youtube.com/embed/Xm2rywDLsEY")),
    ];

    public constructor(private sharedModel:ISharedModel, private $sce:ISCEService, private $log:ILogService) {
        sharedModel.dataLoaded.then(() => {
            this.enrichChannelsWithProgram(this.channels, sharedModel.data.event.days);
            setInterval(() => this.enrichChannelsWithProgram(this.channels, sharedModel.data.event.days), 10000);
        });
    }

    private url(url:string) {
        return this.$sce.trustAsResourceUrl(url);
    }

    private computeNow():any {
        return moment('2016-10-21T15:50:00+02:00');
        //return moment();
    }

    public selectChannel(channelDef:ChannelDef):void {
        this.currentChannel = channelDef;
    }

    public enrichChannelsWithProgram(channels:Array<ChannelDef>, days:Array<CFPDay>):void {

        this.$log.info('enrich channels with CFP program');

        var day = _.find(days, (day:CFPDay) => this.computeNow().startOf('day').isSame(day.date.startOf('day')));
        if (!day) throw new Error('current day not found');

        var now = this.computeNow();
        var slot = _.find(day.slots, (slot:ICFPSlot) => {
            return slot.from.isBefore(now) && slot.to.isSameOrAfter(now);
        });
        if (!slot) return;

        _.each(channels, (channel:ChannelDef) => {
            var talk = _.find(slot.presentations, (prez:ICFPPresentation) => prez.room === channel.roomId);
            if (talk !== channel.talk) channel.talk = talk;
        });
    }
}