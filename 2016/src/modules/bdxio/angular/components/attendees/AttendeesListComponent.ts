export class AttendeesListComponent implements ng.IDirective {
    public scope = {
        title: '@',
        attendees: '='
    };
    
    // Pour une liste complète des attributs possibles sur un attendee, cf SharedModel dans les
    // columnFields de orgas/jurys/speakers
    public template: string = `
        <div>
            <div>{{title}}</div>
            <ul>
                <li ng-repeat="attendee in attendees">
                    {{attendee.firstName}} {{attendee.lastName}}
                </li>
            </ul>
        </div>
    `
}
