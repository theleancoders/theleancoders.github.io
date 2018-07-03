/**
 Template Name: Candlly - Multipurpose Template
 Author: CoderThemes
 Email: coderthemes@gmail.com
 File: Main js file
 */


/**
 * Our application module - manages all the elements in all pages
 */
 "use strict";

var CandllyApp = (function() {
    "use strict";
    
    var windowRef = $(window);
    var htmlRef = $('html');
    var bodyRef = $('html, body');
    var docRef = $(document);

    var navigationToggle = $('.navbar-toggle');
    var navigationMenu = $('#navigation');
    var navigationList = $('.navigation-menu>li');
    var navigationListItems = $('.navigation-menu');
    var menuItems = $('.navigation-menu a');
    var flexSlider = $('.main-slider');
    var mailChimpForm = $('#subscribe-form');
    var customModals = $('[data-plugin="custommodal"]');
    var singleProductSlider = $('.product-slider-thumb');
    var counterEls = $('.counter');
    var scroollClass = $('.defaultscroll');
    var backtoTop = $('.back-to-top');
    var loaderStatus = $('#status');
    var loaderPreloader = $('#preloader');


    //magnify popup
    var initMenu = function() {
        var scroll = $(window).scrollTop();

        navigationToggle.on('click', function (event) {
            $(this).toggleClass('open');
            navigationMenu.slideToggle(400);
        });

        navigationList.slice(-2).addClass('last-elements');

        navigationListItems.on('click', function (e) {
            var a = $(e.target);
            if ($(window).width() < 992 && a.is('a') && a.parent('li').hasClass('has-submenu')) {
                e.preventDefault();
                a.parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }; 

    var initScrollMenu = function() {
        $(window).on('scroll', function (e) {
            var scroll = $(this).scrollTop();
            if (scroll >= 50) {
                scroollClass.addClass("scroll");
            } else {
                scroollClass.removeClass("scroll");
            }

            // Back to top
            if (scroll > 100) {
                backtoTop.fadeIn();
            } else {
                backtoTop.fadeOut();
            }
        });
        
        // Back to top
        backtoTop.on('click', function () {
            bodyRef.animate({scrollTop: 0}, 1000);
            return false;
        });
    }; 

    //on window load call back function
    var onWinLoad = function(e) {
        //
        loaderStatus.fadeOut();
        loaderPreloader.delay(350).fadeOut('slow');
    };

    //on document ready callback function
    var onDocReady = function(e) {

        //init counters
        counterEls.counterUp({
            delay: 100,
            time: 3000
        });

        menuItems.each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
            }
        });

        //FlexSlider
        flexSlider.flexslider({
            slideshowSpeed: 5000,
            directionNav: false,
            controlNav: true,
            animation: "fade"
        });

        singleProductSlider.flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });

        mailChimpForm.ajaxChimp({});

        customModals.on('click', function(e) {
            Custombox.open({
                target: $(this).attr("href"),
                effect: $(this).attr("data-animation"),
                overlaySpeed: $(this).attr("data-overlaySpeed"),
                overlayColor: $(this).attr("data-overlayColor")
            });
            e.preventDefault();
        });

        $(window).stellar({
            responsive: true,
            scrollProperty: 'scroll',
            parallaxElements: false,
            horizontalScrolling: false,
            horizontalOffset: 0,
            verticalOffset: 0
        });

        //Menu
        initMenu();
        initScrollMenu();
        new WOW().init();

    };

    //binding events
    var bindEvents = function() {
        docRef.on('ready', onDocReady);
        windowRef.on('load', onWinLoad);
    };

    // init - initilizes various widgets, elements, events, etc
    var init = function() {
        bindEvents();
    };

    return {
        init: init
    };
}());

//init app
CandllyApp.init();

