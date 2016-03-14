export class AttendeesListComponent implements ng.IDirective {
    public scope = {
        title: '@',
        attendees: '='
    };
    
    // Pour une liste complète des attributs possibles sur un attendee, cf SharedModel dans les
    // columnFields de orgas/jurys/speakers
    public template: string = `
       <section class="attendees-content wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="section-title text-primary space-top-40 space-bottom-40">{{title}}</h1>
                </div>
                <ul>
                    <li class="col-sm-6 col-md-4 col-lg-3 text-center item-attendees" ng-repeat="attendee in attendees">
                        <span class="content-img-attendees">
                            <img ng-src="{{attendee.avatarUrl}}">

                            <ul class="attendees-networks">
                                <li ng-show="attendee.twitter"><a ng-href="{{attendee.twitter}}" target="_blank"><i class="bdx-twitter"></i></a></li>
                                <li><a href="http://lanyrd.com/2015/bdxio/" target="_blank"><i class="bdx-lanyrd"></i></a></li>
                            </ul>
                        </span>

                        <h4 class="text-secondary highlight-text-bold">{{attendee.firstName}} {{attendee.lastName}}</h4>

                        <p class="desc-attendees">
                            {{attendee.bio}}
                        </p>

                    </li>
                </ul>
            </div>
        </div>
    `
}
