(function ($) {
    'use strict';

    var vingene_window = $(window);

    // ****************************
    // :: 1.0 Preloader Active Code
    // ****************************
    vingene_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // ****************************
    // :: 2.0 ClassyNav Active Code
    // ****************************

    if ($.fn.classyNav) {
        $('#vingeneNav').classyNav();
    }

    // *********************************
    // :: 3.0 Welcome Slides Active Code
    // *********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            nav: true,
            navText: ["<img src='img/icon-pr.png'>","<img src='img/ic-next.png'>"],
            loop: true,
            autoplay: false,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            smartSpeed: 2000

        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // **************************
    // :: 9.0 Tooltip Active Code
    // **************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************
    // :: 10.0 WOW Active Code
    // ***********************
    if (vingene_window.width() > 767) {
        new WOW().init();
    }

    // ****************************
    // :: 11.0 Jarallax Active Code
    // ****************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // ****************************
    // :: 12.0 Scrollup Active Code
    // ****************************
    if ($.fn.scrollUp) {
        vingene_window.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-chevron-up"</i>'
        });
    }

    // ******************************
    // :: 13.0 Counter Up Active Code
    // ******************************
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 15,
            time: 1500
        });
    }

    // *********************************
    // :: 14.0 Prevent Default 'a' Click
    // *********************************
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // ******************************
    // :: 15.0 Countdown Active Code
    // ******************************
    if ($.fn.countdown) {
        $("#clock").countdown("2020/11/10", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"));
        });
    }


})(jQuery);

$('.box-slide-ctkt').owlCarousel({
      loop:true,
      autoplay:true,
      // navText: ["<img src='img/left-arow.png'>","<img src='img/right-arow.png'>"],
      nav:true,
      dots:true,
      autoplayHoverPause: true,
      autoplaySpeed: 700,
      margin:20, 
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1000,
      responsive:{
          0:{
              items:1,
          },
          767:{
              items:2,
          },
          992:{
              items:3,
          },
          1200:{
              items:3,
          },
          1600:{
              items:3,
          }
      }
    }); /*slide dia chi xet nhiem*/


  $('.box-slide').owlCarousel({
      loop:true,
      autoplay:true,
      navText: ["<img src='img/left-arow.png'>","<img src='img/right-arow.png'>"],
      nav:true,
      dots:true,
      autoplayHoverPause: true,
      autoplaySpeed: 700,
      // margin:20, 
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1000,
      responsive:{
          0:{
              items:1,
          },
          767:{
              items:1,
          },
          992:{
              items:2,
          },
          1200:{
              items:2,
          },
          1600:{
              items:2,
          }
      }
    }); /*slide dia chi xet nhiem*/

   $('.box-slide-dt').owlCarousel({
      loop:true,
      autoplay:true,
      navText: ["<img src='img/left-arow.png'>","<img src='img/right-arow.png'>"],
      nav:true,
      dots:false,
      autoplayHoverPause: true,
      autoplaySpeed: 500,
      margin:70, 
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 1000,
      responsive:{
          0:{
              items:2,
          },
          767:{
              items:3,
          },
          992:{
              items:4,
          },
          1200:{
              items:4,
          },
          1600:{
              items:4,
          }
      }
    });/*slide khach hang*/

    $('.box-slide-tell-about ').owlCarousel({
      loop:true,
      autoplay:true,
      // navText: ["<img src='img/left-arow.png'>","<img src='img/right-arow.png'>"],
      nav:true,
      dots:true,
      autoplayHoverPause: true,
      autoplaySpeed: 700,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      smartSpeed: 1000,
      responsive:{
          0:{
              items:1,
          },
          767:{
              items:1,
          },
          992:{
              items:1,
          },
          1200:{
              items:1,
          },
          1600:{
              items:1,
          }
      }
    }); /*slide nhan xet*/


    // scoll-top
   $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
    $(".header-area").removeClass("sticky");
    $('#back-top').fadeIn(500);
    } else {
    $(".header-area").addClass("sticky");
    $('#back-top').fadeIn(500);
    }
});