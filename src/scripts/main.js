

$(document).ready(function () {
    
    $('.tabs__item').on('click', function (e) {
        e.preventDefault();
        let n = $(this).index();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().find('.tabs-content .tabs-content__item').removeClass('active');
        $(this).parent().parent().find('.tabs-content .tabs-content__item').eq(n).addClass('active');
    });

    $(".js-smartphoto").SmartPhoto();
    
    $('.list-toggle__item').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        if ($(this).hasClass('grid')) {
            $('.list').addClass('list_grid');
        } else {
            $('.list').removeClass('list_grid');
        }
    });

    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('active');
    });

    $('.buy-mobile').on('click', function (e) {
        e.preventDefault();
        $('.cart').addClass('active');
        $('body').addClass('modal-active');
    });

    $('.cart-close').on('click', function (e) {
        e.preventDefault();
        $('.cart').removeClass('active');
        $('body').removeClass('modal-active');
    });

});

$(window).scroll(function() {

});


