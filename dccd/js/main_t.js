var index=0;
var count_down=20;
var tops=0;
setInterval(function(){ 
	tops=tops-count_down;
	if(Math.abs(tops)>=$(".img_right_bg").height()){
		tops=0;
	}
	$(".img_right_bg").css('top',tops);
}, 100
);
$(document).ready(function(){
	$(".calendar_in .item_calendar").each(function(){
		$(this).click(function(){
			$(".detail_day").toggleClass("active");
		});
	});
	$(".close_p").click(function(){
		$(".detail_day").toggleClass("active");
	});
});
$(".content_calendar .item_calendar").each(function(){
	$(this).click(function(){
		$(".content_calendar .item_calendar").removeClass("active");
		$(this).addClass("active");
	});
});
$('.slider_news').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
	}
});

$('.items_calendar').slick({
	dots: false,
	infinite: false,
	arrows:false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	}
	]
});
slick_fill=$('#fullpage').slick({
	dots: false,
	infinite: true,
	arrows:false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
});
var page = 0;
// full page
var myFullpage = new fullpage('#fullpages', {
	menu: '#menu',
	parallax: true,
	scrollingSpeed: 1000,
	normalScrollElements: '.scrollable-element',
	parallaxOptions: {
		type: 'reveal',
		percentage: 62,
		property: 'translate'
	},
	onLeave: function(anchorLink, index, direction){
		if (direction == 'up'){
			page--;
			$('#fullpage').slick('slickGoTo', page);
			//console.log(page);
		}
		if (direction == 'down'){
			page++;
			$('#fullpage').slick('slickGoTo', page);
			//console.log(page);
		}
	},
	afterLoad: function(anchorLink, index, direction){
				// $('.fp-section .fp-bg').removeClass('translate-up');
				// $('.fp-section .fp-bg').removeClass('translate-down');
			}
		});
// chuyển page
$(".next_page").click(function(){
	$('#fullpage').slick('slickGoTo', page+1);
});

var index_top=0;
var data_top=['WHAT GOING ON','TOp pick one','TOp pick two','TOp pick th'];
activeSlider();
function activeSlider(){
	$(".slider_news_all .slider_news").removeClass("active");
	$(".slider_news_all .slider_news").each(function(index){
		if(index==index_top){
			$(this).addClass("active");
		}
	});
}

$(".next_toppicks").click(function(){
	if(index_top<data_top.length-1){
		index_top++;
		$(".data_title").html(data_top[index_top]);
		activeSlider();
	}
});
$(".prev_toppicks").click(function(){
	if(index_top>0){
		index_top--;
		$(".data_title").html(data_top[index_top]);
		activeSlider();
	}
});
// calendar
var index_map=0;
var data_map=['CLUB','CAFE','TOp pick two','TOp pick th'];
activeCalendar();
function activeCalendar(){
	$(".content_calendar_all .content_calendar ").removeClass("active");
	$(".detail_day_all .detail_day ").removeClass("active");
	$(".content_calendar_all .content_calendar ").each(function(index){
		if(index==index_map){
			$(this).addClass("active");
		}
	});
	$(".detail_day_all .detail_day ").each(function(index){
		if(index==index_map){
			$(this).addClass("active");
		}
	});
}

$(".next_map").click(function(){
	if(index_map<data_map.length-1){
		index_map++;
		$(".data_map").html(data_map[index_map]);
		activeCalendar();
	}

});
$(".prev_map").click(function(){
	if(index_map>0){
		index_map--;
		$(".data_map").html(data_map[index_map]);
		activeCalendar();
	}
});

// effect
wow = new WOW(
{
	animateClass: 'animated',
	offset:       0,
	callback:     function(box) {
		console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
}
);
wow.init();
// path
$(".fill path").each(function(){
	$(this).hover(function(){
		var img=$(this).attr("img");
		var des=$(this).attr("des");
		if(img && des){
			$(".logo_change").attr("src",img);
			$(".text_change").html(des);
		}

	});
});