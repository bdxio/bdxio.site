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
import {AttendeesListComponent} from "./components/attendees/AttendeesListComponent";
import {AttendeesPageComponent} from "./components/attendees/AttendeesPageComponent";
import {PartnersPageComponent} from "./components/partners/PartnersPageComponent";
import {PartnersListComponent} from "./components/partners/PartnersListComponent";

angular.module("bdxio.app", ["ngRoute"])
    .component("homePage", new HomePageComponent())
    .component("welcomeContent", new WelcomeContentComponent())
    .component("newsList", new NewsListComponent())
    .component("summaryContent", new SummaryContentComponent())
    .component("locationContent", new LocationContentComponent())
    .component("newsletterSubscription", new NewsletterSubscriptionComponent())
    .component("attendeesPage", new AttendeesPageComponent())
    .component("partnersPage", new PartnersPageComponent())

    .directive("attendeesList", () => new AttendeesListComponent())
    .directive("partnersList", () => new PartnersListComponent())

    .service("ISharedModel", SharedModel)

    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider.when("/", { template: "<home-page></home-page>" });
        $routeProvider.when("/attendees", { template: "<attendees-page></attendees-page>" });
        $routeProvider.when("/partners", { template: "<partners-page></partners-page>" });
    }])
    .run(["ISharedModel", (sharedModel: ISharedModel) => {
        console.info("BDX I/O App module ran !");
    }]);
