export class NewsListComponent implements ng.IDirective {
    public controller: Function = NewsListController;
    public template: string = `
        <ul class="content-list-news">
            <li class="item-new" ng-repeat="newsItem in $ctrl.availableNews">
                <img src="https://i.ytimg.com/vi/GtAfp55gBeQ/maxresdefault.jpg">
                <div class="content-title-new">
                   <span class="date-new text-white"><i class="fa fa-calendar-o space-right-5"></i> Billet du 00.00.2016</span>
                   <h3 class="text-white">{{::newsItem.title}}</h3>
                   <button ng-morph-modal="$ctrl.settings" class="btn btn-primary btn-lg has-icon-left"><i class="fa fa-eye"></i>Lire l’article</button>
                </div>
            </li>
        </ul>
    `
}
export class NewsListController {
    public static $inject: Array<string> = [];

    public availableNews: Array<{ title }> = [
        { title: "Je déclare le CFP...OUVERT !"},
        { title: "Une nouvelle affiche pour votre machine à café"}
    ];

    public settings = {
        closeEl: '.close',
        target: 'body',
        modal: {
            template: `
            <div class="modal-morph">
              <span class="glyphicon glyphicon-remove close"></span>
              <div class="row">
                <div class="col-md-12 header-modal">
                    <div class="row">
                        <h3 class="col-md-8 text-white highlight-text-bold force-inner-space-left-30 title">Je déclare le CFP... OUVERT !</h3>
                        <div class="col-md-4">
                            <span class="date-new text-white"><i class="fa fa-calendar-o space-right-5"></i> Billet du 00.00.2016</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 content-modal">
                    <div class="col-md-12">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                        viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
                        sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                        hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
                        venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
                        Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,</p><br>
                        <img src="https://i.ytimg.com/vi/GtAfp55gBeQ/maxresdefault.jpg">
                    </div>
                </div>
                <div class="col-md-12 footer-modal">
                      <button class="btn btn-secondary btn-md has-icon-left float-left"><i class="fa fa-angle-left"></i>Je déclare le CFT...</button>
                      <button class="btn btn-secondary btn-md has-icon-right float-right">Je déclare le CFT...<i class="fa fa-angle-right"></i></button>
                </div>
              </div>
            </div>
            `,
            position: {
                top: '20%',
                left: '30%'
            },
            fade: true
        }
    };

    constructor() {
    }
}