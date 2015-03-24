'use strict';

angular.module('bdxio.app')
    .directive('carousel', function ($timeout) {

        return {
            restrict: 'E',
            link: function (scope, elt) {

                $timeout((function () {
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
                    })
                }), 500)
            }
        };
    });
