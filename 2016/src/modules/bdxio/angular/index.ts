import "angular";
import "angular-route";
import {HomePageComponent} from "./components/home/HomePageComponent";
import {WelcomeContentComponent} from "./components/home/WelcomeContentComponent";
import {NewsListComponent} from "./components/home/NewsListComponent";
import {SummaryContentComponent} from "./components/home/SummaryContentComponent";
import {LocationContentComponent} from "./components/home/LocationContentComponent";
import {NewsletterSubscriptionComponent} from "./components/home/NewsletterSubscriptionComponent";

angular.module("bdxio.app", ["ngRoute"])
    .component("homePage", new HomePageComponent())
    .component("welcomeContent", new WelcomeContentComponent())
    .component("newsList", new NewsListComponent())
    .component("summaryContent", new SummaryContentComponent())
    .component("locationContent", new LocationContentComponent())
    .component("newsletterSubscription", new NewsletterSubscriptionComponent())
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider.when("/", {
            template: "<home-page></home-page>"
        });
    }]);