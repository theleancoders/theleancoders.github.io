/**
 Template Name: Candlly - Multipurpose Template
 Author: CoderThemes
 Email: coderthemes@gmail.com
 File: Blog masonry Init js
 */

(function($) {
    "use strict";
    $(document).ready(function() {

        init_masonry();

        //PORTFOLIO FILTER
        $(window).on('load', function () {
            var $container = $('.masonry-layout');
            var $filter = $('#filter');
            // Initialize isotope
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
            // Filter items when filter link is clicked
            $filter.find('a').click(function () {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('current');
                $(this).addClass('current');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
            /*END*/
        });

    });


    function init_masonry(){
        (function($){

            $(".masonry").imagesLoaded(function(){
                $(".masonry").masonry();
            });

        })(jQuery);
    }

})(jQuery);

