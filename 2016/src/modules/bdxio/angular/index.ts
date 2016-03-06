import "angular";
import "angular-route";
import {HomePageComponent} from "./components/home/HomePageComponent";
import {WelcomeContentComponent} from "./components/home/WelcomeContentComponent";
import {NewsListComponent} from "./components/home/NewsListComponent";
import {SummaryContentComponent} from "./components/home/SummaryContentComponent";
import {LocationContentComponent} from "./components/home/LocationContentComponent";
import {NewsletterSubscriptionComponent} from "./components/home/NewsletterSubscriptionComponent";
import {SharedModel} from "../models/impl/SharedModel";
import {ISharedModel} from "../models/int/ISharedModel";

angular.module("bdxio.app", ["ngRoute"])
    .component("homePage", new HomePageComponent())
    .component("welcomeContent", new WelcomeContentComponent())
    .component("newsList", new NewsListComponent())
    .component("summaryContent", new SummaryContentComponent())
    .component("locationContent", new LocationContentComponent())
    .component("newsletterSubscription", new NewsletterSubscriptionComponent())
    .service("ISharedModel", SharedModel)
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider.when("/", {
            template: "<home-page></home-page>"
        });
    }])
    .run(["ISharedModel", (sharedModel: ISharedModel) => {
        console.info("BDX I/O App module ran !");
    }]);
