import "angular";

import {BdxIOAppComponent} from "./components/BdxIOAppComponent";
import {AppNavMenuComponent} from "./components/AppNavMenuComponent";
import {AppFooterComponent} from "./components/AppFooterComponent";
import ILocationService = angular.ILocationService;
import IAnchorScrollService = angular.IAnchorScrollService;
import ITimeoutService = angular.ITimeoutService;

export interface BDXIORootScope {
    goto(path: string, targetAnchorName: string);
}

angular.module("app.application", [])
    .component("bdxioApp", new BdxIOAppComponent())
    .component("appNavMenu", new AppNavMenuComponent())
    .component("appFooter", new AppFooterComponent())
    .run([
        '$rootScope', '$location', '$anchorScroll', '$timeout',
        ($rootScope, $location: ILocationService, $anchorScroll: IAnchorScrollService, $timeout: ITimeoutService) => {
            $rootScope.goto = (path: string, targetAnchorName?: string) => {
                if(path !== $location.path()) {
                    // ga('send', 'screenview', { 'screenName': path });
                }
        
                $location.path(path);

                if(targetAnchorName) {
                    $location.hash(targetAnchorName);
                    $anchorScroll();

                    // Hackish here... allows to anchorscroll and take into consideration menu header
                    // because of https://github.com/angular/angular.js/issues/2070
                    $timeout(() => {
                        var bodyPaddingTop = $('body').css('padding-top');
                        scrollBy(0, -parseInt(bodyPaddingTop, 10));
                    }, 100);
                } else {
                    $location.hash('');
                }
            };
        }
    ]);
