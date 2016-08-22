import "./modules/application/angular/index";
import "./modules/bdxio/angular/index";
import "angular";
import "angular-morph/dist/angular-morph";
import "slick-carousel/slick/slick.min";
import "scrollreveal/dist/scrollreveal";
import "ui-select/dist/select.min";
import "angular-sanitize/angular-sanitize.min";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.js";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick.scss";
import "ui-select/dist/select.min.css";

angular.module("app", ["app.application", "bdxio.app", "ngMorph", "ui.select", "ngSanitize"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});