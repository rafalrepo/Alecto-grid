$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
        $("nav").addClass('fixed-nav');
    } else if ($("nav").hasClass('fixed-nav')) {
        $("nav").removeClass('fixed-nav');
    }
})