$(document).ready(function() {
    $('#toggler').click(function() {
        $(this).toggleClass('open-menu');
        $('#nav').toggleClass('nav--open');
        $('.container__header').toggleClass('container__header--open');
        $('.header__tel').toggleClass('header__tel--open');
    });

    $('.carousel').slick({
        slidesToShow: 1.4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});