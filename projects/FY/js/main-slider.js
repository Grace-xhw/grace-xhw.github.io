jQuery(document).ready(function($){
					        $('#index-slider').flexslider({
					        animation: "fade",  
					        slideDirection: "horizontal",  
					        slideshow: true,              
					        slideshowSpeed: 3500,      
					        animationDuration: 500,
					        directionNav: true, 
					        controlNav: false  
					    });
					}); 

	jQuery(document).ready(function($) {
					$(".flexslider img").each(function(){
						var img_src = $(this).attr("src");
						var img_href = $(this).parent("a").attr("href");

							if (img_href == "#" || img_href=="javascript:void()") {
							        $(this).parent("a").attr("href", img_src).attr("data-rel", "prettyPhoto[]")
							}
						})
					}) 