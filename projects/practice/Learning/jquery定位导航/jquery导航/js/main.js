

// $(document).ready(function () {
// 	$(window).scroll(function(){
// 		var top = $(document).scrollTop();
// 		// console.log(top);
// 		var menu = $("#menu");
// 		var items = $("#content").find(".item");
// 		// 或写成 var item = $(".item"),但上面的方法会更快捷。
// 		var currentId = "";  
// 		// 代表当前所在楼层的id，即（item）#id。
// 		items.each(function(){
// 			var m = $(this);
// 			var itemTop = m.offset().top;
// 			// console.log(itemTop);
// 			if (top > itemTop - 200) {
// 				currentId = "#" + m.attr("id");
// 			} else {
// 				return false;
// 			}
// 		});
// 		// 给相应楼层的 a 设置current类，取消其他链接的current
// 		var currentLink = menu.find(".current");
// 		if (currentId && currentLink.attr("href")!= currentId) {
// 			currentLink.removeClass("current");
// 			menu.find("[href=" + currentId + "]").addClass("current");
// 		};
		
// 	});
// });

$(function(){
	$(window).scroll(function(){
		var top = $(document).scrollTop();
		var menu =$("#menu");
		var items = $(".item");
		var currentId="";
		items.each(function(){
			var m=$(this);
			var itemTop=m.offset().top;
			if (top > itemTop -200) {
				currentId = "#" + m.attr("id");
			} else {
				return false;
			};

			var currentLink=menu.find(".current");
			if (currentId && currentLink.attr("href")!=currentId) {
				currentLink.removeClass("current");
				menu.find("[href=" + currentId + "]").addClass("current");
			};
		});
	});
});
















