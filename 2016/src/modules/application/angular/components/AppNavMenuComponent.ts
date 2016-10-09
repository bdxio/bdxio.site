import {BDXIORootScope} from "../index";
import {IConfig, ISharedModel} from "../../../bdxio/models/int/ISharedModel";
import ILocationService = angular.ILocationService;
import * as moment from 'moment';

export class AppNavMenuComponent implements ng.IDirective {
    public controller:Function = AppNavMenuController;
    public template:string = `
        <header class="header">
             <div class="top-header">
                 <button type="button" class="btn btn-live-stream float-right" ng-click="$ctrl.selectMenu('livestream')"
                         ng-show="$ctrl.isLivestreamEnabled()">
                    Livestream
                    <span class="status-live live-on"><i class="fa fa-circle"></i>ON</span>
                 </button>
                 <button type="button" class="btn btn-live-stream float-right" ng-show="!$ctrl.isLivestreamEnabled()">
                    Livestream
                    <span class="status-live live-off"><i class="fa fa-circle"></i>OFF</span>
                 </button>
                 <ul class="header-list-networks">
                     <li class="item-networks"><a href="https://twitter.com/bdxio?lang=fr" target="_blank"><i class="bdx-twitter"></i></a></li>
                     <li class="item-networks"><a href="http://lanyrd.com/2016/bdxio/" target="_blank"><i class="bdx-lanyrd"></i></a></li>
                     <li class="item-networks"><a href="https://www.facebook.com/bdxio" target="_blank"><i class="bdx-facebook"></i></a></li>
                     <li class="item-networks"><a href="mailto:team@bdx.io"><i class="bdx-mail"></i></a></li>
                 </ul>
             </div>
             <nav class="navbar navbar-inverse" role="navigation">
                <div class="header-container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="fa fa-bars"></i>
                        </button>
                        <button ng-class="{ open: $ctrl.config.registrationOpened=='opened' }"
                                ng-click="$ctrl.openRegistrationPopup()" type="button" class="btn-collapse-header btn-round btn btn-white btn-r-medium float-right force-space-right-20" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="fa fa-ticket"></i>
                        </button>
                        <button ng-class="{ open: !$ctrl.isCfpNotOpenedYet() }"
                                ng-click="$ctrl.openProgram()" type="button" class="btn-collapse-header btn-round btn btn-white btn-r-medium float-right force-space-right-20" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="fa fa-commenting-o" ng-if="$ctrl.isCfpNotOpenedYet() || $ctrl.isCfpOpened()"></i>
                            <i class="fa fa-calendar" ng-if="$ctrl.isTalksListPublished() || $ctrl.isProgramPublished()"></i>
                        </button>

                        <a class="navbar-brand" href="#"></a>
                    </div>

                    <div class="navbar-collapse collapse no-transition" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="btn-home">
                                <a ng-class="{select: $ctrl.selectedMenu=='home'}" ng-click="$ctrl.selectMenu('home')"><i class="fa fa-home"></i></a>
                            </li>
                            <li class="dropdown collapse">
                                <a href="#" class="dropdown-toggle" ng-class="{select: $ctrl.selectedMenuContains('partner')}"
                                    data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="true">
                                    Partenaires<i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a ng-class="{select: $ctrl.selectedMenu=='partner-gold'}" ng-click="$ctrl.selectMenu('partner-gold')" class="sponsor gold">Gold</a></li>
                                    <li><a ng-class="{select: $ctrl.selectedMenu=='partner-silver'}" ng-click="$ctrl.selectMenu('partner-silver')" class="sponsor silver">Silver</a></li>
                                    <li><a ng-class="{select: $ctrl.selectedMenu=='partner-bronze'}" ng-click="$ctrl.selectMenu('partner-bronze')" class="sponsor bronze">Bronze</a></li>
                                    <li><a href="static/plaquette2016.pdf" target="_blank">La plaquette</a></li>
                                    <li><a ng-class="{select: $ctrl.selectedMenu=='partner-press'}" ng-click="$ctrl.selectMenu('partner-press')">Press / Média</a></li>
                                    <li><a ng-class="{select: $ctrl.selectedMenu=='partner-friends'}" ng-click="$ctrl.selectMenu('partner-friends')">Nos amis</a></li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" ng-class="{select: $ctrl.selectedMenuContains('participant')}"
                                    data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="true">
                                    Participants<i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <!-- <li><a ng-click="$ctrl.selectMenu('participant-speakers')">Speakers</a></li> -->
                                    <li><a ng-click="$ctrl.selectMenu('participant-speakers')">Speakers</a></li>
                                    <li><a ng-click="$ctrl.selectMenu('participant-orgas')">Organisateurs</a></li>
                                </ul>
                            </li>

                            <li>
                                <a ng-class="{select: $ctrl.selectedMenu=='faq'}" ng-click="$ctrl.selectMenu('faq')">FAQ</a>
                            </li>
                            <li class="btn-buy-ticket" ng-class="{ open: $ctrl.config.registrationOpened=='opened' }"
                                ng-click="$ctrl.openRegistrationPopup()">
                                <div class="col-xs-6 col-sm-8 no-padding text-right">
                                    <span>Acheter un billet</span><br>
                                    <span class="status-sale" ng-show="$ctrl.config.registrationOpened=='closed'">Ventes Fermées</span>
                                    <span class="status-sale" ng-show="$ctrl.config.registrationOpened=='opened'">Ventes Ouvertes</span>
                                    <span class="status-sale" ng-show="$ctrl.config.registrationOpened=='soldout'">SOLD OUT</span>
                                </div>
                                <div class="col-xs-6 col-sm-4">
                                    <i class="fa fa-ticket space-top-3"></i>
                                </div>
                            </li>
                            <li class="btn-cfp-link" ng-class="{ open: !$ctrl.isCfpNotOpenedYet() && !$ctrl.isCfpClosed() }" ng-click="$ctrl.openProgram()">
                                <div class="col-xs-6 col-sm-8 no-padding text-right">
                                    <!-- CFP Not opened yet or closed (only subtext changes) -->
                                    <span ng-if="$ctrl.isCfpNotOpenedYet()">Patience !<br></span>
                                    <span ng-if="$ctrl.isCfpClosed()">Délibération en cours<br></span>
                                    <span class="status-sale" ng-if="$ctrl.isCfpNotOpenedYet() || $ctrl.isCfpClosed()">CFP Fermé</span>
                                    <!-- CFP Opened -->
                                    <span ng-if="$ctrl.isCfpOpened()">Proposer un talk<br></span>
                                    <span class="status-sale" ng-if="$ctrl.isCfpOpened()">CFP Ouvert</span>
                                    <!-- Talks list or full program has been published (only subtext changes) -->
                                    <span ng-if="$ctrl.isTalksListPublished() || $ctrl.isProgramPublished()">Consulter<br></span>
                                    <span class="status-sale" ng-if="$ctrl.isTalksListPublished()">Liste des talks</span>
                                    <span class="status-sale" ng-if="$ctrl.isProgramPublished()">Programme</span>
                                </div>
                                <div class="col-xs-6 col-sm-4" ng-if="$ctrl.isCfpNotOpenedYet() || $ctrl.isCfpOpened() || $ctrl.isCfpClosed()">
                                   <i class="fa fa-commenting-o"></i>
                                </div>
                                <div class="col-xs-6 col-sm-4" ng-if="$ctrl.isTalksListPublished() || $ctrl.isProgramPublished()">
                                   <i class="fa fa-calendar"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

type SelectableMenu = 'partner-gold'|'partner-silver'|'partner-bronze'|'partner-press'|'partner-friends'|'participant-speakers'|'participant-orgas'|'faq'|'prog';

export class AppNavMenuController {

    private static SELECTED_MENU_PROPS:{[key: string]: {path: string, targetAnchorName?: string }} = {
        'partner-gold': {path: '/partners', targetAnchorName: 'gold'},
        'partner-silver': {path: '/partners', targetAnchorName: 'silver'},
        'partner-bronze': {path: '/partners', targetAnchorName: 'bronze'},
        'partner-press': {path: '/partners', targetAnchorName: 'press'},
        'partner-friends': {path: '/partners', targetAnchorName: 'friends'},
        'participant-speakers': {path: '/attendees', targetAnchorName: 'speakers'},
        'participant-orgas': {path: '/attendees', targetAnchorName: 'orgas'},
        'program': {path: '/program'},
        'livestream': {path: '/livestream'},
        'faq': {path: '/faq'},
        'prog': {path: '/prog'},
        'home': {path: '/'},
    };

    public static $inject = ["$rootScope", "ISharedModel", "$location"];

    public selectedMenu:SelectableMenu;
    public config:IConfig;
    public now:moment.Moment = moment();

    constructor(private $rootScope:BDXIORootScope, sharedModel:ISharedModel, private $location: ILocationService) {
        sharedModel.dataLoaded.then(() => {
            this.config = sharedModel.data.config;
        });
    }

    public selectedMenuContains(str:string) {
        return this.selectedMenu && this.selectedMenu.indexOf(str) !== -1;
    }

    public selectMenu(menuToSelect:SelectableMenu) {
        this.selectedMenu = menuToSelect;

        var selectedMenuProps = AppNavMenuController.SELECTED_MENU_PROPS[menuToSelect];
        this.$rootScope.goto(selectedMenuProps.path, selectedMenuProps.targetAnchorName);
    }

    public openRegistrationPopup() {
        if (this.config.registrationOpened == "opened") {
            var url = 'https://www.weezevent.com/widget_billeterie.php?id_evenement=178103&lg_billetterie=1&code=20244&width_auto=1&color_primary=00AEEF';
            var w = window.open(url, 'Billetterie_weezevent', 'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no');
            w.focus();
        }
    }

    public isLivestreamEnabled() {
        if (this.config) {
            return this.config.livestreamOpeningDate && this.now.isAfter(this.config.livestreamOpeningDate);
        }
    }

    public isCfpNotOpenedYet() {
        if (this.config) {
            return !this.config.cfpOpeningDate || this.now.isBefore(this.config.cfpOpeningDate);
        }
    }

    public isCfpOpened() {
        if (this.config) {
            return this.config.cfpOpeningDate && this.now.isAfter(this.config.cfpOpeningDate)
                && this.config.cfpClosingDate && this.now.isBefore(this.config.cfpClosingDate);
        }
    }

    public isCfpClosed() {
        if (this.config) {
            return this.config.cfpClosingDate && this.now.isAfter(this.config.cfpClosingDate)
                && this.config.talksListPublishingDate && this.now.isBefore(this.config.talksListPublishingDate);
        }
    }

    public isTalksListPublished() {
        if (this.config) {
            return this.config.talksListPublishingDate && this.now.isAfter(this.config.talksListPublishingDate)
                && this.config.programPublishingDate && this.now.isBefore(this.config.programPublishingDate);
        }
    }

    public isProgramPublished() {
        if (this.config) {
            return this.config.programPublishingDate && this.now.isAfter(this.config.programPublishingDate);
        }
    }

    public openProgram() {
        if (this.isCfpOpened()) {
            window.open('https://cfp.bdx.io', '_blank');
        } else if (this.isTalksListPublished() || this.isProgramPublished()) {
            this.$location.path("/program");
        }
    }
}