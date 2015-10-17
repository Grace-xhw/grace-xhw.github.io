	
	var g = function(id){
		return document.getElementById(id);
	}

	//时间轴对象构造函数
	var TimeLine = function(){
		this.order = []; //动画序列
		this.add = function(timeout, func, log){
			this.order.push({
				timeout:timeout,
				func:func,
				log:log,
			});
		}
		// 参数ff支持快进
		this.start = function(ff){
			for(s in this.order){
				(function(me){
					var fn = me.func;
					var timeout = me.timeout;
					var log = me.log;
					timeout = Math.max(timeout-(ff||0), 0);

					setTimeout(fn,timeout);
					setTimeout(function(){
						console.log('time->',timeout,'log->',log);
					},timeout);
				})(this.order[s]);
			}
		}
	}

	// 初始的场景
	var s1 = new TimeLine();
	// 粽子展开的场景
	var s2 = new TimeLine();
	// 粽子旋转的场景
	var s3 = new TimeLine();
	s1.add(1,function(){
		g('zongzi-box').className = 'zongzi-box zongzi-box-rock';

		g('line-1').onclick = function(){
			s2.start();
			// g('zongzi').onclick = function(){}
		}
	})
	// s1.start();

	// 定义粽子展开的动画
	s2.add(1,function(){
		g('zongzi-box').className = 'zongzi-box';
		g('wishes').className = 'wishes wishes-in';
		g('caption').className = 'caption caption-rock';
	})
	s2.add(100,function(){
		g('line-1').className = 'line-2';
	})
	s2.add(500,function(){
		g('line-1').className = 'line-3';
	})
	s2.add(1000,function(){
		g('line-1').className = 'line-4';
	})
	s2.add(1500,function(){
		g('line-1').className = 'line-0';
	})

	s2.add(2000,function(){
		g('zongzi').className = 'zongzi zongzi-out';
		g('zongzirou').className = 'zongzirou zongzirou-in';
		g('leaf-left').className = 'leaf-left leaf-left-in';
		g('leaf-right').className = 'leaf-right leaf-right-in';
	})

	s2.add(3000, function(){
		g('leaf-left').className = 'leaf-left leaf-left-in leaf-left-out';
		g('leaf-right').className = 'leaf-right leaf-right-in leaf-right-out';
		g('leaf-expand').className = 'leaf-expand leaf-expand-in';
		s3.start();
	})

	// 粽子肉托盘旋转动画
	s3.add(1000,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-1';
	})
	s3.add(1200,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-2';
		g('text-1').className = 'text-1 text-in text-view-2';
		g('text-2').className = 'text-2 text-in text-mirror-2';
	})
	s3.add(1400,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-3';
		g('text-1').className = 'text-1 text-in text-view-3';
		g('text-2').className = 'text-2 text-in text-mirror-3';
	})
	s3.add(1600,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-4';
		g('text-1').className = 'text-1 text-in text-view-4';
		g('text-2').className = 'text-2 text-in text-mirror-4';
	})
	s3.add(1800,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-0';
		g('text-1').className = 'text-1 text-in text-mirror-0';
		g('text-2').className = 'text-2 text-in text-view-0';
	})
	s3.add(3000,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-4';
		g('text-1').className = 'text-1 text-in text-view-4';
		g('text-2').className = 'text-2 text-in text-mirror-4';
	})
	s3.add(3200,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-3';
		g('text-1').className = 'text-1 text-in text-view-3';
		g('text-2').className = 'text-2 text-in text-mirror-3';
	})
	s3.add(3400,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-2';
		g('text-1').className = 'text-1 text-in text-view-2';
		g('text-2').className = 'text-2 text-in text-mirror-2';

	})
	s3.add(3600,function(){
		g('zongzirou').className = 'zongzirou zongzirou-in zongzirou-view-1';
		g('text-1').className = 'text-1 text-in text-view-0';
		g('text-2').className = 'text-2 text-in text-mirror-0';
	})
	s3.add(5000,function(){
		s3.start();
	})

	// 定义图片加载器
	var imgs = ['img/zzr_2.png','img/zzr_3.png','img/zzr_4.png'];
	var imgs_onload = function(){
		imgs.pop();
		if (imgs.length == 0) {
			s1.start();
		};
	}
	for(s in  imgs){
		var img = new Image;
		img.onload = imgs_onload;
		img.src = imgs[s];
	}













