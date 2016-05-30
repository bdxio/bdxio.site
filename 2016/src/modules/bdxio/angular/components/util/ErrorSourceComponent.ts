import IScope = angular.IScope;
export class ErrorSourceComponent implements ng.IDirective {

    //public restrict = 'A';

    public link(scope:IScope, elt, attrs:any) {
        elt.bind('error', function () {
            if (attrs.src != attrs.errSrc) {
                attrs.$set('src', attrs.errSrc);
            }
        });
    }
}
