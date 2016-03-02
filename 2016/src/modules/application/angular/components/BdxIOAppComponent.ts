export class BdxIOAppComponent implements ng.IDirective {
    public template: string = `
        <app-nav-menu></app-nav-menu>
        <div ng-view></div>
        <app-footer></app-footer>
    `;
}