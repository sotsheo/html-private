$(".search-icon").click(function() {
    $(".box-search-show").addClass("open");
});
$(".close").click(function() {
    $(".box-search-show").removeClass("open");
});

$(".categories-menu").each(function(){
    $(this).find(".fa-minus").click(function(){
        $(this).toggleClass("fa-plus");
        $(this).parent().parent().find(".group-check-box").toggleClass("active");
    });
});
// creat menu sidebar
$(".menu-bar-lv-1").each(function(){
    $(this).find(".span-lv-1").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-2").toggle(500);
    });
});
$(".menu-bar-lv-2").each(function(){
    $(this).find(".span-lv-2").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-3").toggle(500);
    });
});
$(".shadow-open-menu").click(function() {
    $('.menu-bar-mobile').fadeOut();
    $(".shadow-open-menu").fadeOut();
     $(".menu-btn-show").toggleClass("active");
    $(".iconmenu").toggleClass("open");
});
$(".iconmenu").click(function() {
    $(this).toggleClass("open");
    $('.menu-bar-mobile').fadeToggle(500);
    $(".shadow-open-menu").fadeToggle(500);
});
$(".menu-btn-show").click(function() {
    $(this).toggleClass("active");
    $('.menu-bar-mobile').fadeToggle(500);
    $(".shadow-open-menu").fadeToggle(500);
});
// $(".shadow-open-menu").click(function() {
//     $('.menu-bar-mobile').fadeOut();
//     $(".shadow-open-menu").fadeOut();
//     $(".iconmenu").toggleClass("open");
// });
// $(".iconmenu").click(function() {
//     $(this).toggleClass("open");
//     $('.menu-bar-mobile').fadeToggle(500);
//     $(".shadow-open-menu").fadeToggle(500);
// });

$(document).ready(function(){

    if ($(window).width() < 992 ) {
        $('.main-menu ul li').find('.span-lv-1').click(function(){
            if ($('.main-menu > ul > li').hasClass('active')) {
                $('.main-menu ul li').removeClass('active');
            } else{
                $('.main-menu ul li').removeClass('active');
                $(this).parent().toggleClass('active')
            }
            
        });
        $('.main-menu ul li').find('.span-lv-2').click(function(){
            if ($('.main-menu > ul > li > ul > li').hasClass('active')) {
                $('.main-menu > ul > li > ul > li').removeClass('active');
            } else{
                $('.main-menu > ul > li > ul > li').removeClass('active');
                $(this).parent().toggleClass('active')
            }
            
        });
    }
    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y > 10) {
            $("body").addClass("fixed");
        } else {
            $("body").removeClass("fixed");
        };
    };
    window.addEventListener("scroll", myScrollFunc);

    setTimeout(function(){ 
        $('.loading').addClass('close-loading');
        $('.main-content').addClass('active');
    }, 2500);
    
    $('.tab-cate-product ul li a').click(function() {
        var getTabId = $(this).attr('id');
        $('.tab-cate-product ul li a,.tab-cate-product ul li').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('active');
        $('.content-read').slideUp();
        $('.content-read-' + getTabId).slideDown();

    });
     setTimeout(function () { $('.page-loader-wrapper').fadeOut(); }, 50);
});

function font_size_width_destop() {
    var width = window.innerWidth
    var font_size_html = width/1920*10;
    $('html').css({
        'font-size': font_size_html,
    });
}

$(window).resize(function(){
    if ($(window).width() >= 1400 ) {
        font_size_width_destop();
    }

});

if ($(window).width() >= 1400 ) {
    font_size_width_destop();
}