import {IAttendee} from "../../../models/int/IAttendee";
import {IConfig} from "../../../models/int/ISharedModel";
import {ISharedModel} from "../../../models/int/ISharedModel";
export class AttendeesListComponent implements ng.IDirective {

    public controller:Function = AttendeesListController;

    public scope = {
        title: '@',
        anchor: '@',
        attendees: '='
    };

    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public template:string = `
       <div id="{{$ctrl.anchor}}">&nbsp;</div>
       <section class="attendees-content wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="section-title text-primary space-top-40 space-left-50 space-bottom-40">{{$ctrl.title}}</h1>
                </div>
                <ul>
                    <li class="col-sm-6 col-md-4 col-lg-3 text-left item-attendees" ng-repeat="attendee in $ctrl.attendees">
                        <span class="content-attendees">
                            <span class="company-affiliate" ng-show="attendee.companyLogo">
                                <img ng-src="{{attendee.companyLogo}}"
                                     err-src="https://cdn.rawgit.com/bdxio/static/master/default-company-logo.png">
                            </span>

                            <span class="container-avatar-attendees">
                                <img class="img-avatar" ng-src="{{attendee.avatarUrl}}"
                                     err-src="https://cdn.rawgit.com/bdxio/static/master/default-avatar.png">
                            </span>

                            <span class="view-details">
                                <button type="button" class="btn-round btn btn-white btn-r-medium"
                                        ng-morph-modal="$ctrl.createAttendeeDetailsSettings(attendee)">
                                    <i class="fa fa-eye"></i>
                                </button>
                            </span>

                            <ul class="attendees-networks" ng-show="attendee.atLeastOneSocial()">
                                <li ng-show="attendee.twitter"><a ng-href="http://www.twitter.com/{{attendee.twitter}}" target="_blank"><i class="bdx-twitter"></i></a></li>
                                <li ng-show="attendee.linkedin"><a ng-href="http://{{attendee.linkedin}}" target="_blank"><i class="bdx-linkedin"></i></a></li>
                                <li ng-show="attendee.gplus"><a ng-href="http://plus.google.com/{{attendee.gplus}}/posts" target="_blank"><i class="bdx-gplus"></i></a></li>
                                <li ng-show="attendee.blog"><a ng-href="{{attendee.blog}}" target="_blank"><i class="bdx-blog"></i></a></li>
                            </ul>
                        </span>

                        <h4 class="text-secondary highlight-text-bold">
                            {{attendee.firstName}} {{attendee.lastName}}
                        </h4>

                    </li>
                </ul>
            </div>
        </div>
    `;
}

export class AttendeesListController {

    public static $inject = ["ISharedModel"];

    public config:IConfig;

    constructor(sharedModel:ISharedModel) {
        sharedModel.dataLoaded.then(() => {
            this.config = sharedModel.data.config;
        });
    }

    public createAttendeeDetailsSettings(attendee:IAttendee) {
        return {
            closeEl: '.close',
            target: 'body',
            modal: {
                template: `
            <div class="modal-morph">
              <span class="glyphicon glyphicon-remove close"></span>
              <div class="row">
                <div class="col-md-12 header-modal">
                    <div class="row">
                        <h3 class="col-md-8 text-white highlight-text-bold force-inner-space-left-30 title">${attendee.firstName} ${attendee.lastName}</h3>
                        <div class="col-md-4 text-right">
                            <span class="date-new text-white inner-space-right-15" ng-show="${attendee.company != null}">
                                <i class="fa fa-building-o space-right-5"></i>${attendee.company}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 content-modal">
                    <p class="desc-attendees">${attendee.bio}</p>
                </div>
              </div>
            </div>`,
                fade: true
            }
        };
    }
}
