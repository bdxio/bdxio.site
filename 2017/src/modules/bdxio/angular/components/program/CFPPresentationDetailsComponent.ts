export class CFPPresentationDetailsComponent implements ng.IDirective {

    public controller:Function = CFPPresentationDetailsController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public scope = {
        presentation: '=',
        options: '='
    };

    public template:string = `
        <div class="header-prez" ng-show="$ctrl.presentation.speakers">
            <ul class="container-avatar-speaker">
                <li class="avatar-speaker" ng-repeat="speaker in $ctrl.presentation.speakers" ng-style="speaker.getAvatarStyle()"></li>
            </ul>

            <span class="mobile-room">{{ $ctrl.presentation.room }}</span>
        </div>

        <ul class="container-name-speaker" ng-show="$ctrl.presentation.speakers">
            <li ng-repeat="speaker in $ctrl.presentation.speakers">{{ speaker.fullName() }}</li>
        </ul>

        <h4 class="prez-title-track small-title" ng-if="$ctrl.presentation.track">
            <i ng-class="$ctrl.options.trackClasses[$ctrl.presentation.track]"></i>
            <label>{{ $ctrl.presentation.track }}</label>
        </h4>

        <h4 class="prez-title-talk">{{ $ctrl.presentation.title }}</h3>
    `
}
export class CFPPresentationDetailsController {

}