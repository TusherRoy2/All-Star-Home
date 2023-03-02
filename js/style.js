$(document).ready(function () {
    'use strict'

    // CODE START

    
    $('.menu-icon .fa-bars').click(function () {
        $('nav .menu').slideDown()
        $('.menu-icon .fa-times').show()
        $(this).hide()
    })

    $('.menu-icon .fa-times').click(function () {
        $('nav .menu').slideUp()
        $('.menu-icon .fa-bars').show()
        $(this).hide()
    })

    $(window).resize(function (){
        let scrnSize = $(window).width()

        if (scrnSize > 991){
            $('nav .menu').removeAttr('style')
        }
        
    })

    //   owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    // FAQ


    
    $('.faqItem .Q-1 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-1 .fa-sort-up').show()
        $('.faqItem .A-1').slideDown(500)
    })
    $('.faqItem .Q-1 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-1 .fa-sort-down').show()
        $('.faqItem .A-1').slideUp(500)
    })

    // 

    $('.faqItem .Q-2 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-2 .fa-sort-up').show()
        $('.faqItem .A-2').slideDown(500)
    })
    $('.faqItem .Q-2 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-2 .fa-sort-down').show()
        $('.faqItem .A-2').slideUp(500)
    })

    // 

    $('.faqItem .Q-3 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-3 .fa-sort-up').show()
        $('.faqItem .A-3').slideDown(500)
    })
    $('.faqItem .Q-3 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-3 .fa-sort-down').show()
        $('.faqItem .A-3').slideUp(500)
    })

    // 

    $('.faqItem .Q-4 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-4 .fa-sort-up').show()
        $('.faqItem .A-4').slideDown(500)
    })
    $('.faqItem .Q-4 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-4 .fa-sort-down').show()
        $('.faqItem .A-4').slideUp(500)
    })

    // 

    $('.faqItem .Q-5 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-5 .fa-sort-up').show()
        $('.faqItem .A-5').slideDown(500)
    })
    $('.faqItem .Q-5 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-5 .fa-sort-down').show()
        $('.faqItem .A-5').slideUp(500)
    })

    // 

    $('.faqItem .Q-6 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-6 .fa-sort-up').show()
        $('.faqItem .A-6').slideDown(500)
    })
    $('.faqItem .Q-6 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-6 .fa-sort-down').show()
        $('.faqItem .A-6').slideUp(500)
    })

    // 

    $('.faqItem .Q-7 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-7 .fa-sort-up').show()
        $('.faqItem .A-7').slideDown(500)
    })
    $('.faqItem .Q-7 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-7 .fa-sort-down').show()
        $('.faqItem .A-7').slideUp(500)
    })

    // 

    $('.faqItem .Q-8 .fa-sort-down').click(function (){
        $(this).hide()
        $('.Q-8 .fa-sort-up').show()
        $('.faqItem .A-8').slideDown(500)
    })
    $('.faqItem .Q-8 .fa-sort-up').click(function (){
        $(this).hide()
        $('.Q-8 .fa-sort-down').show()
        $('.faqItem .A-8').slideUp(500)
    })

    // 

    // //wow js
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();




})