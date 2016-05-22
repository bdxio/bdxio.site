import IScope = angular.IScope;
import IAugmentedJQuery = angular.IAugmentedJQuery;
export class CarouselComponent implements ng.IDirective {
    public restrict = 'E';
    public scope = {
        elements: '='
        // title: '@',
        // anchor: '@',
        // attendees: '='
    };
    
    public link(scope: IScope, elt) {
        var setupCarousel = function () {
            elt.slick({
                arrows: true,
                dots: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        };

        scope.$watchCollection('elements', (_elements: any[]) => {
            if (_elements && _elements.length > 0) {
                setupCarousel();
            }
        });
    }
}
