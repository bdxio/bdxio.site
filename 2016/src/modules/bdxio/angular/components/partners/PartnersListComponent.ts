export class PartnersListComponent implements ng.IDirective {
    public scope = {
        partnersByType: '='
    };
    
    // Pour une liste complète des attributs possibles sur un attendee, cf SharedModel dans les
    // columnFields de partners
    public template: string = `
        <div>
            <div>{{partnersByType.type}}</div>
            <ul>
                <li ng-repeat="partner in partnersByType.companies">
                    {{partner.name}}
                </li>
            </ul>
        </div>
    `
}
