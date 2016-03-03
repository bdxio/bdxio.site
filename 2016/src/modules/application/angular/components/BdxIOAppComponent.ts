export class BdxIOAppComponent implements ng.IDirective {
    public template: string = `
        <app-nav-menu></app-nav-menu>
        <div class="general-container" ng-view></div>
        <app-footer></app-footer>
    `;
}