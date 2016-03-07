import {ISharedModel, ITypedCompaniesByType} from "../../../models/int/ISharedModel";

export class PartnersPageComponent implements ng.IDirective {
    public controller: Function = PartnersPageController;
    public template: string = `
        <partners-list partners-by-type="$ctrl.partnersByType.gold" />
        <partners-list partners-by-type="$ctrl.partnersByType.silver" />
        <partners-list partners-by-type="$ctrl.partnersByType.bronze" />
    `
}
export class PartnersPageController {
    public static $inject: Array<string> = ['ISharedModel'];
    
    private partnersByType: ITypedCompaniesByType;

    constructor(sharedModel: ISharedModel) {
        sharedModel.dataLoaded.then(() => {
            this.partnersByType = sharedModel.data.partners;
        });
    }
}