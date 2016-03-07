import {ISharedModel} from "../../../models/int/ISharedModel";
export class AttendeesPageComponent implements ng.IDirective {
    public controller: Function = AttendeesPageController;
    public template: string = `
        <attendees-list title="Les speakers" attendees="$ctrl.speakers" />
        <attendees-list title="L'équipe d'organisation" attendees="$ctrl.orgas" />
    `
}
export class AttendeesPageController {
    public static $inject: Array<string> = ['ISharedModel'];
    
    private orgas: any;
    private speakers: any;

    constructor(sharedModel: ISharedModel) {
        sharedModel.dataLoaded.then(() => {
            this.orgas = sharedModel.data.orgas;
            this.speakers = sharedModel.data.speakers;
        });
    }
}