$('.sliderC').bxSlider({
	maxSlides:6,// 최대 6개 까지 
	slideWidth:160,//슬라이드 하나의 넓이
	moveSlides:1,//하나씩 넘기기 
	pager:false,//표시동그라미 지우기 
	auto:true, //자동넘기기 
	autoHover:true,//마우스 올리면 정지 
	pause:1500//1.5초씩 쉬어가기 
})

$('.sliderC a').fancybox();

$('.sliderC a').css({'opacity':0.5});

$('.sliderC a').on('mouseenter',function(){
	$(this).animate({'opacity':1})
})

$('.sliderC a').on('mouseleave',function(){
	$(this).animate({'opacity':0.5})
})