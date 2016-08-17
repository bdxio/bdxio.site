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
import {FAQPageComponent} from "./components/faq/FAQPageComponent";
import {CarouselComponent} from "./components/carousel/CarouselComponent";
import {ErrorSourceComponent} from "./components/util/ErrorSourceComponent";
import {ConferenceLocationComponent} from "./components/util/ConferenceLocationComponent";
import {FriendsListComponent} from "./components/partners/FriendsListComponent";
import {ProgramPageComponent} from "./components/program/ProgramPage";
import {CFPProgramComponent} from "./components/program/CFPProgram";

angular.module("bdxio.app", ["ngRoute"])
    .component("homePage", new HomePageComponent())
    .component("welcomeContent", new WelcomeContentComponent())
    .component("newsList", new NewsListComponent())
    .component("summaryContent", new SummaryContentComponent())
    .component("locationContent", new LocationContentComponent())
    .component("newsletterSubscription", new NewsletterSubscriptionComponent())
    .component("attendeesPage", new AttendeesPageComponent())
    .component("partnersPage", new PartnersPageComponent())
    .component("faqPage", new FAQPageComponent())
    .component("programPage", new ProgramPageComponent())

    .directive("errSrc", () => new ErrorSourceComponent())
    .directive("attendeesList", () => new AttendeesListComponent())
    .directive("partnersList", () => new PartnersListComponent())
    .directive("friendsList", () => new FriendsListComponent())
    .directive("carousel", () => new CarouselComponent())
    .directive("conferenceLocation", () => new ConferenceLocationComponent())
    .directive("cfpProgram", () => new CFPProgramComponent())

    .service("ISharedModel", SharedModel)

    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/", { template: "<home-page></home-page>" })
            .when("/attendees", { template: "<attendees-page></attendees-page>" })
            .when("/partners", { template: "<partners-page></partners-page>" })
            .when("/faq", { template: "<faq-page></faq-page>" })
            .when("/program", { template: "<program-page></program-page>" })
            .when("", { redirectTo: "/" })
            .otherwise({ redirectTo: "/" });
    }])
    .run(["ISharedModel", (sharedModel: ISharedModel) => {
        console.info("BDX I/O App module ran !");
    }]);
