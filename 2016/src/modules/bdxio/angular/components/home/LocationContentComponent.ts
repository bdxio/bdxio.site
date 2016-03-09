export class LocationContentComponent implements ng.IDirective {
    public controller: Function = LocationContentController;
    public template: string = `
        <section class="summary-content wrapper">
            <div class="row">
                 <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location">
                            <h4 class="title text-white">A 10 minutes de Bordeaux</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location">
                            <h4 class="title text-white">6 amphis <br> 5 Tracks en parallèle <br> + 40 conférences</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location">
                            <h4 class="title text-white">~15 Communautés <br> 400 Développeur(se)s</h4>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    `
}
export class LocationContentController {
    public static $inject: Array<string> = [];

    constructor() {
    }
}