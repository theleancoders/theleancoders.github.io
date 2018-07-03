/**
 Template Name: Candlly - Multipurpose Template
 Author: CoderThemes
 Email: coderthemes@gmail.com
 File: Count Down Init js
 */

 "use strict";

$(document).ready(function (){
    // To change date, simply edit: var endDate = "June 26, 2015 20:39:00";
    $(function() {
        var endDate = "January 17, 2020 20:39:00";
        $('.lj-countdown .row').countdown({
            date: endDate,
            render: function(data) {
                $(this.el).html('<div><div><span>' + (parseInt(this.leadingZeros(data.years, 2)*365) + parseInt(this.leadingZeros(data.days, 2))) + '</span><span>Days</span></div><div><span>' + this.leadingZeros(data.hours, 2) + '</span><span>Hours</span></div></div><div class="lj-countdown-ms"><div><span>' + this.leadingZeros(data.min, 2) + '</span><span>Minutes</span></div><div><span>' + this.leadingZeros(data.sec, 2) + '</span><span>Seconds</span></div></div>');
            }
        });
    });
});

