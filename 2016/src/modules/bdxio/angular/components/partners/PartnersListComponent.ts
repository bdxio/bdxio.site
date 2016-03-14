export class PartnersListComponent implements ng.IDirective {
    public scope = {
        partnersByType: '='
    };
    
    // Pour une liste complète des attributs possibles sur un attendee, cf SharedModel dans les
    // columnFields de partners
    public template: string = `
        <div class="wrapper">
            <div class="row">
              <div class="col-sm-12">
                    <h1 class="section-title text-primary space-top-40 inner-space-left-20 space-bottom-40">{{partnersByType.type}}</h1>
                </div>
                <ul class="row">
                    <li class="item-partner col-xs-12 col-sm-6 col-md-4 col-lg-3" ng-repeat="partner in partnersByType.companies">
                        <div class="content-partner">
                            <img src="http://www.esea2015.fr/sites/esea2015.drupal7.aquisante.priv/files/capgemini.png">
                            <div class="content-infos-partner">
                                <span class="name-partner">{{partner.name}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
              </div>
            </div>
        </div>
    `
}
