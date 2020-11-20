/*
	All Thanks To Osama ElZero
*/

$(function () {

    'use strict';

    // Give Active Class

    $('.item').first().addClass('active');

    // Show First Info

    $('.info').first().show().animate({width: '40%'});

    // Show Info On Click

    $('.item').mouseenter(function () {

        $(this).addClass("active").siblings('.item').removeClass('active');

        $(this).next().show().animate({width: '30%'}).siblings('.info').animate({width: 0}, function () {

            $(this).hide();

        });

    });

});
