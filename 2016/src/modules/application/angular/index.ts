import "angular";

import {BdxIOAppComponent} from "./components/BdxIOAppComponent";
import {AppNavMenuComponent} from "./components/AppNavMenuComponent";
import {AppFooterComponent} from "./components/AppFooterComponent";
angular.module("app.application", [])
    .component("bdxioApp", new BdxIOAppComponent())
    .component("appNavMenu", new AppNavMenuComponent())
    .component("appFooter", new AppFooterComponent());