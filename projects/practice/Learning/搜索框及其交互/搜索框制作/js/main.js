	$(function () {
			$("#search-input").bind('keyup',function(){
				var searchText=$("#search-input").val();
				$.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
					var d=d.AS.Results[0].Suggests;
					var html='';
					for (var i = 0; i<d.length; i++) {
						html+='<li>'+d[i].Txt+'</li>';
					}

					$('#search-result').html(html);
					$("#search-suggest").show().css({
						top:$("#search-form").offset().top+$("#search-form").height()+10,
						left:$("#search-form").offset().left,
						position:'absolute'
					});
				},'json');
			});	

			$(document).click(function(){
				$("#search-suggest").hide();
			});

			// 以下是事件代理，因为上面的‘<li></li>’里面的html内容是通过js添加的，所以使用事件代理；
			$(document).delegate('li','click',function(){
				// 用.text()获取关键字
				var keyword = $(this).text();
				// 实现页面跳转用location属性
				location.href = 'http://cn.bing.com/search?q='+keyword;
			});
		});



// 以下是javascript实现的搜索框功能
//   var getDOM = function(id){
//   	return document.getElementById(id);
//   }

//   var addEvent = function(id,event,fn){
//   	var el = getDOM(id)||document;
//   	if (el.addEventListener) {
//   		el.addEventListener(event,fn,false);
//   	}else if (el.attachEvent) {
//   		el.attachEvent('on'+event,fn);
//   	}
//   }

//  var getElementLeft = function(element){
//   	var actualLeft = element.offsetLeft;
//   	var current = element.offsetParent;

//   	while (current !== null){
//   		var actualLeft += current.offsetLeft;
//   		current = current.offsetParent;
//   	}
//   	return actualLeft;
//   }

//  var getElementTop = function(element){
//   	var actualTop = element.offsetTop;
//   	var current = element.offsetParent;

//   	while (current !== null){
//   		var actualTop += current.offsetTop;
//   		current = current.offsetParent;
//   	}
//   	return actualTop;
//   }

// addEvent('search-input','keyup',function(){
// 	getDOM('search-suggest').style.top = getElementTop(getDOM('search-form'))+38+"px";
// 	getDOM('search-suggest').style.left = getElementLeft(getDOM('search-form'))+"px";
// 	getDOM('search-suggest').style.position = 'absolute';
// 	getDOM('search-suggest').style.display = 'block';
// })


























