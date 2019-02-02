/**
 * Created by Саша on 16.04.2018.
 */
$(document).ready(function () {

    $('.header .nav-menu').removeClass('passive');
    $('.burger').click(function (e) {
        e.stopPropagation();
        $('.header .nav-menu').toggleClass('active');
    });
    $('.main-area').click(function (e) {
        e.stopPropagation();
        if($(window).width <770) {
            $('.header .nav-menu').removeClass('active');
            $('.header .nav-menu').addClass('passive');
        }
        $('.header .nav-menu').removeClass('passive');
        $('.header .nav-menu').removeClass('active');
    });
});

