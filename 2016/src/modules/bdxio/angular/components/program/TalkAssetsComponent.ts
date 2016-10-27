import {ITalkAssets} from "../../../models/int/ISharedModel";
import {ITalkAsset} from "../../../models/int/ISharedModel";
import Dictionary = _.Dictionary;
export class TalkAssetsComponent implements ng.IDirective {

    public controller:Function = TalkAssetsController;
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public scope = {
        assets: '='
    };

    public template:string = `
        <div class="talk-asset" ng-if="$ctrl.assets.livestream && !$ctrl.assets.videocapture">
            <a ng-href="{{ $ctrl.assets.livestream.url }}" target="_blank" ng-if="$ctrl.assets.livestream.url" class="livestream">
                <i class="fa fa-video-camera" aria-hidden="true" class="talk-asset"></i>
            </a>
        </div>
        <div class="talk-asset" ng-if="$ctrl.assets.videocapture">
            <a ng-href="{{ $ctrl.assets.videocapture.url }}" target="_blank" ng-if="$ctrl.assets.videocapture.url" class="videocapture">
                <i class="fa fa-video-camera" aria-hidden="true" class="talk-asset"></i>
            </a>
        </div>
        <div class="talk-asset" ng-repeat="asset in $ctrl.assets.others">
            <a ng-href="{{ asset.url }}" target="_blank" ng-if="asset.url" class="other">
                <i class="fa fa-{{ $ctrl.getAssetIcon(asset) }}" aria-hidden="true" class="talk-asset"></i>
            </a>
        </div>
    `;
}

export class TalkAssetsController {

    public assets:ITalkAssets;
    public assetTypeIcons:Dictionary<string> = {
        "slides": "slideshare",
        "sources": "github",
        "transcript": "file-text-o",
        "photo": "picture-o",
        "writeup": "pencil"
    };

    public getAssetIcon(asset:ITalkAsset):string {
        return this.assetTypeIcons[asset.assetType];
    }
}