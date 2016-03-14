import "./modules/application/angular/index";
import "./modules/bdxio/angular/index";
import "angular";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.js";

angular.module("app", ["app.application", "bdxio.app"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});