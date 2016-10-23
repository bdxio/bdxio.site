import {ITalkAsset} from "../../../models/int/ISharedModel";
export class TalkAssetsComponent implements ng.IDirective {

    public controller:Function = TalkAssetsController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public scope = {
        assets: '='
    };

    public template:string = `
        <div ng-repeat="asset in $ctrl.assets" class="talk-assets">
            <a ng-href="{{ asset.url }}" target="_blank" ng-if="asset.url">
                <i class="fa fa-video-camera" aria-hidden="true" class="talk-asset" ng-if="asset.assetType === 'livestream'"></i>
            </a>
        </div>
    `;
}

export class TalkAssetsController {

    public assets:Array<ITalkAsset>;

}