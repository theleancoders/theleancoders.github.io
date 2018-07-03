/**
 Template Name: Candlly - Multipurpose Template
 Author: CoderThemes
 Email: coderthemes@gmail.com
 File: Animation Init js
 */

$(function() {
    $('body').on('click', '.demo-animation .btn', function(){
        var animation = $(this).text();
        var cardImg = $(this).closest('.animation-demo-box').find('img');
        if (animation === "hinge") {
            animationDuration = 2100;
        }
        else {
            animationDuration = 1200;
        }

        cardImg.removeAttr('class');
        cardImg.addClass('animated '+animation);

        setTimeout(function(){
            cardImg.removeClass(animation);
        }, animationDuration);
    });
});
