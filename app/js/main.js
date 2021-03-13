$(function () {
    $('.header__menu-btn').on('click', function () {
        $('.header__menu-wrapper, .header__menu, .header__menu-btn').toggleClass('active');
        $('.header__btn, .logo, .header__social').toggleClass('inactive')
    });
    $('.lake__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="lake__prev"></div>',
        nextArrow: '<div class="lake__next"></div>',
    });

    $('.modal-btn').magnificPopup({
        callbacks: {
            open: function () {
                $('body').toggleClass('modal-open');
            },
            close: function () {
                $('body').removeClass('modal-open');
            }
        }
    });

    $('.visualization__slider-items').slick({
        fade: true,
        prevArrow: '<div class="visualization__prev"></div>',
        nextArrow: '<div class="visualization__next"></div>',
    });

});