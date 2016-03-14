import {ISharedModel, ITypedCompaniesByType} from "../../../models/int/ISharedModel";

export class PartnersPageComponent implements ng.IDirective {
    public controller: Function = PartnersPageController;
    public template: string = `
        <section class="partners wrapper">
            <div class="row">
                <div class="col-sm-12">
                     <h2 class="text-white highlight-text-bold">Partenaires</h2>
                </div>

                <div class="col-xs-12 col-sm-6">

                <h4 class="text-white highlight-text-bold">
                        Chaque partenaire soutient financièrement la conférence.
                        Sans ces sociétés, l'organisation de BDX.io n'aurait pas été possible :
                        le prix de l'entrée aurait coûté plus cher, certains speakers ne pourraient pas être défrayés,
                        le repas du midi ne pourrait pas être offert...
                        N'hésitez donc pas à aller consulter le site de ces sociétés pour en savoir davantage sur elles.
                     </h4>
                </div>

                <button type="button" class="btn-view-talks btn btn-primary btn-xlg has-icon-left ">
                    <i class="fa fa-question-circle"></i>Comment devenir partenaire ?
                </button>
            </div>
        </section>
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