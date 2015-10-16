
define(['jquery'],function ($) {
	function scrollTo(opts){
		this.opts = $.extend({},scrollTo.DEFAULTS, opts);
		//$.extend()的作用，将用户传进来的参数覆盖默认的参数，传给{}
		this.$el = $('html,body');
	}
	scrollTo.prototype.move = function(){
		var x = this.opts;

		if ($(window).scrollTop() != x.dest) {
			if (!this.$el.is(':animated')) {
				this.$el.animate({scrollTop: x.dest
						},x.speed);
			};
		};
	}

	scrollTo.prototype.go = function(){
		if ($(window).scrollTop() != x.dest) {
			this.$el.scrollTop(x.dest);
		};
	}
	//设置默认参数
	scrollTo.DEFAULTS = {
		dest:0,
		speed:600
	};

	return {
		scrollTo: scrollTo
		//返回一个对象，对象的属性是srollTo,接下来会在main.js中用来做构造函数,
		//然后把上面的scrollTo函数作为它的值；
	}
})