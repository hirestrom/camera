// sticky header 

jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 42) {
        jQuery('header').addClass('fixed');
    } else {
        jQuery('header').removeClass('fixed');
    }
});

// product slider
jQuery('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    pauseOnHover: true,
});
jQuery('.slider-nav').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    vertical: true,
    focusOnSelect: true,
    pauseOnHover: true,
});



// jQuery('.slider-for-modal').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav-modal',
//     pauseOnHover: true,
// });
// jQuery('.slider-nav-modal').slick({
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for-modal',
//     dots: false,
//     vertical: true,
//     focusOnSelect: true
// });