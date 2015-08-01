$(document).ready(function(){
	        // header nav
			$('.list').hover(
				function(){
					$(this).addClass('list_hover');
				},
				function(){
					$(this).removeClass('list_hover');
				})
			// footer fixed
			$('.jju_layer_close').click(function(){
				$('.footer_jion_hide').fadeOut();
			})
		});