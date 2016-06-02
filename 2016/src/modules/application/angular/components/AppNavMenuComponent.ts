import {BDXIORootScope} from "../index";
import {IConfig, ISharedModel} from "../../../bdxio/models/int/ISharedModel";
export class AppNavMenuComponent implements ng.IDirective {
    public controller: Function = AppNavMenuController;
    public template: string = `
        <header class="header">
             <div class="top-header">
                 <button type="button" class="btn btn-live-stream float-right">
                    Livestream
                    <span class="status-live live-on" ng-show="$ctrl.config.livestreamEnabled=='1'"><i class="fa fa-circle"></i>ON</span>
                    <span class="status-live live-off" ng-show="$ctrl.config.livestreamEnabled=='0'"><i class="fa fa-circle"></i>OFF</span>
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
                        <button ng-class="{ open: $ctrl.config.registrationOpened=='1' }"
                                ng-click="$ctrl.openRegistrationPopup()" type="button" class="btn-collapse-header btn-round btn btn-white btn-r-medium float-right force-space-right-20" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="fa fa-ticket"></i>
                        </button>
                          <button ng-class="{ open: $ctrl.config.cfpOpened=='1' }"
                                ng-click="$ctrl.openCFPAsTab()" type="button" class=" btn-collapse-header btn-round btn btn-white btn-r-medium float-right force-space-right-20" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="fa fa-commenting-o"></i>
                        </button>
                        <a class="navbar-brand" href="#"></a>
                    </div>

                    <div class="navbar-collapse collapse  no-transition" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
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
                                    <li><a ng-click="$ctrl.selectMenu('participant-speakers')">Speakers</a></li>
                                    <li><a ng-click="$ctrl.selectMenu('participant-orgas')">Organisateurs</a></li>
                                </ul>
                            </li>

                            <li>
                                <a ng-class="{select: $ctrl.selectedMenu=='faq'}" ng-click="$ctrl.selectMenu('faq')">FAQ</a>
                            </li>
                            <li>
                                <a href="http://appv2.voxxr.in/#/events" target="_blank">Programme</a>
                            </li>
                            <li class="btn-buy-ticket" ng-class="{ open: $ctrl.config.registrationOpened=='1' }"
                                ng-click="$ctrl.openRegistrationPopup()">
                                <div class="col-xs-6 col-sm-8 no-padding text-right">
                                    <span>Acheter un billet</span><br>
                                    <span class="status-sale" ng-show="$ctrl.config.registrationOpened=='0'">Ventes Fermées</span>
                                    <span class="status-sale" ng-show="$ctrl.config.registrationOpened=='1'">Ventes Ouvertes</span>
                                </div>
                                <div class="col-xs-6 col-sm-4">
                                    <i class="fa fa-ticket space-top-3"></i>
                                </div>
                            </li>

                            <li class="btn-cfp-link" ng-class="{ open: $ctrl.config.cfpOpened=='1' }"
                                ng-click="$ctrl.openCFPAsTab()">
                                <div class="col-xs-6 col-sm-8 no-padding text-right">
                                    <span>Proposer un talk</span><br>
                                    <span class="status-sale" ng-show="$ctrl.config.cfpOpened=='0'">CFP Fermé</span>
                                    <span class="status-sale" ng-show="$ctrl.config.cfpOpened=='1'">CFP Ouvert</span>
                                </div>
                                <div class="col-xs-6 col-sm-4">
                                   <i class="fa fa-commenting-o"></i>
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
    private static SELECTED_MENU_PROPS: {[key: string]: {path: string, targetAnchorName?: string }} = {
        'partner-gold': { path: '/partners', targetAnchorName: 'gold' },
        'partner-silver': { path: '/partners', targetAnchorName: 'silver' },
        'partner-bronze': { path: '/partners', targetAnchorName: 'bronze' },
        'partner-press': { path: '/partners', targetAnchorName: 'press' },
        'partner-friends': { path: '/partners', targetAnchorName: 'friends' },
        'participant-speakers': { path: '/attendees', targetAnchorName: 'speakers' },
        'participant-orgas': { path: '/attendees', targetAnchorName: 'orgas' },
        'faq': { path: '/faq' },
        'prog': { path: '/prog' },
    };

    public static $inject = ["$rootScope", "ISharedModel"];

    public selectedMenu: SelectableMenu;
    public config: IConfig;

    constructor(private $rootScope: BDXIORootScope, sharedModel: ISharedModel){
        sharedModel.dataLoaded.then(() => {
            this.config = sharedModel.data.config;
        });
    }

    public selectedMenuContains(str: string) {
        return this.selectedMenu && this.selectedMenu.indexOf(str) !== -1;
    }

    public selectMenu(menuToSelect: SelectableMenu) {
        this.selectedMenu = menuToSelect;

        var selectedMenuProps = AppNavMenuController.SELECTED_MENU_PROPS[menuToSelect];
        this.$rootScope.goto(selectedMenuProps.path, selectedMenuProps.targetAnchorName);
    }

    public openRegistrationPopup() {
        if (this.config.registrationOpened == "1") {
            var url = 'https://www.weezevent.com/widget_billeterie.php?id_evenement=178103&lg_billetterie=1&code=20244&width_auto=1&color_primary=00AEEF';
            var w = window.open(url, 'Billetterie_weezevent', 'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no');
            w.focus();
        }
    }

    public openCFPAsTab() {
        if (this.config.cfpOpened == "1") {
            window.open('https://cfp.bdx.io', '_blank');
        }
    }
}