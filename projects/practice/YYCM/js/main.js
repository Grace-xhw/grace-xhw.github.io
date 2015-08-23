
$(function(){
	$(".media").on('click', function(){
		$(this).children(".qr_code").toggleClass("hidden");
	});

	$('.nav_link').click(function(){
		$(".nav a.active").removeClass('active');
    $(this).addClass('active');
		// $(this).parents("li").siblings("li").children(".nav_link").removeClass("active");
	})

  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
})



