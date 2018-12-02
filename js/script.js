/**
 * Created by Саша on 16.04.2018.
 */
$(document).ready(function () {

    //======================================вариант слева=============================
    // $('.header .nav-menu').removeClass('passive');
    // $('.burger').click(function (e) {
    //     e.stopPropagation();
    //     $('.header .nav-menu').addClass('active');
    //     $('.header .nav-menu').removeClass('passive');
    // });
    // $('.main-area').click(function (e) {
    //     e.stopPropagation();
    //     if($(window).width <770) {
    //         $('.header .nav-menu').removeClass('active');
    //         $('.header .nav-menu').addClass('passive');
    //     }
    //     $('.header .nav-menu').removeClass('passive');
    //     $('.header .nav-menu').removeClass('active');
    // });

//    ===========================ВАРИАНТ СПРАВА====================================
    $('.header .nav-menu').removeClass('passive');
    $('.burger').click(function (e) {
        e.stopPropagation();
        $('.header .nav-menu').toggleClass('active');
        // $('.header .nav-menu').removeClass('passive');
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

