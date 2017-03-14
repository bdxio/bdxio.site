import {IFriend} from "../../../models/int/IFriend";
export class FriendsListComponent implements ng.IDirective {

    public scope = {
        friends: '='
    };

    public controller:Function = FriendsListController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public template:string = `
        <div class="wrapper">
            <div class="row">&nbsp;</div>
            <ul class="row">
                <li class="item-friend col-xs-12 col-sm-6 col-md-4 col-lg-3" ng-repeat="friend in $ctrl.friends">
                    <div class="content-friend" ng-click="$ctrl.openExternalLink(friend)">
                        <img ng-src="{{ friend.stdImage }}" err-src="https://cdn.rawgit.com/bdxio/static/master/default-company-logo.png">
                        <div class="content-infos-friend">
                            <span class="name-friend">{{ friend.label }}</span>
                        </div>
                    </div>
                </li>
            </ul>
          </div>
        </div>
    `;
}

export class FriendsListController {

    constructor() {
    }

    public openExternalLink(friend:IFriend) {
        if (friend.url) {
            window.open(friend.url, '_blank');
        }
    }
}
