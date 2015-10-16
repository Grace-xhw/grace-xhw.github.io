
requirejs.config({
	paths:{
		jquery:'jquery-2.1.4.min'
	}
});

// requirejs(['jquery'],function ($) {
// 	$('#backTop').on('click',move);
// 	$(window).on('scroll',function(){
// 		checkPosition($(window).height());
// 	});

// 	checkPosition($(window).height());

// 	function move(){
// 		//有些浏览器滚动条在html上，有些在body上；
// 		$('html,body').animate({
// 			scrollTop: 0
// 		},600);
// 	}

// 	function checkPosition(pos){
// 		if ($(window).scrollTop() > pos) {
// 			$('#backTop').fadeIn();
// 		} else {
// 			$('#backTop').fadeOut();
// 		};
// 	}
// })

requirejs(['jquery','scrollto'],function ($,scrollto) {
	// 使用模块前，先用以下方法进行实例化；
	var scroll = new scrollto.scrollTo({
		dest:0,
		speed:800
	})

	$('#backTop').on('click',$.proxy(scroll.move,scroll));
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});

	checkPosition($(window).height());

	function move(){
		//有些浏览器滚动条在html上，有些在body上；
		$('html,body').animate({
			scrollTop: 0
		},600);
	}

	function checkPosition(pos){
		if ($(window).scrollTop() > pos) {
			$('#backTop').fadeIn();
		} else {
			$('#backTop').fadeOut();
		};
	}
})







 // requirejs(['jquery','backtop'],function ($,backtop) {
 // 	new backtop.BackTop($('#backtop'),{
 // 		mode:'move',
 // 	})
 // })

