window.onload = function(){
	document.onselectstart = new Function('event.returnValue = false;');
	$('#main').draggable({containment:'parent',drag:setChoice});
	var boxDiv = document.getElementById('box');
	var rightDiv = document.getElementById('right');
	var mainDiv = document.getElementById('main');
	var topDiv = document.getElementById('top');
	var leftDiv = document.getElementById('left');
	var bottomDiv = document.getElementById('bottom');
	var leftUpDiv = document.getElementById('left-up');
	var leftDownDiv = document.getElementById('left-down');
	var rightUpDiv = document.getElementById('right-up');
	var rightDownDiv = document.getElementById('right-down');
	var ifkeyDown = false;
	var contact = "";//表示被按下的触点
	//鼠标按下事件
	rightDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "right";
	}
	topDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "up";
	}
	leftDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "left";
	}
	bottomDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "down";
	}
	leftUpDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "left-up";
	}
	leftDownDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "left-down";
	}
	rightUpDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "right-up";
	}
	rightDownDiv.onmousedown = function(e){
		e.stopPropagation();
		ifkeyDown = true;
		contact = "right-down";
	}
	//鼠标松开事件
	window.onmouseup = function(){
		ifkeyDown = false;
	}
	//移动函数
	function rightMove (e) {
		var x = e.clientX;//鼠标坐标
		if(x > getPosition(boxDiv).left + boxDiv.offsetWidth){
			x = getPosition(boxDiv).left + boxDiv.offsetWidth;
		};
		var addWidth = "";
		var widthBefore = mainDiv.offsetWidth - 2;//选取框变化前的宽度
		addWidth = x - getPosition(mainDiv).left - widthBefore;
		mainDiv.style.width = addWidth + widthBefore + "px";//选取框变化后的宽度
	}
	function upMove (e) {
		var y = e.clientY;
		if(y < getPosition(boxDiv).top){
			y = getPosition(boxDiv).top;
		};
		var mainY = getPosition(mainDiv).top;//选取框相对于屏幕上边的距离
		var addHeight = mainY - y;
		var heightBefore = mainDiv.offsetHeight - 2;
		mainDiv.style.height = heightBefore + addHeight + "px";
		mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
	}
	function leftMove (e) {
		var x = e.clientX;
		if(x < getPosition(boxDiv).left){
			x = getPosition(boxDiv).left;
		};
		var mainX = getPosition(mainDiv).left;
		var addWidth = mainX - x;
		var widthBefore = mainDiv.offsetWidth-2;
		mainDiv.style.width = widthBefore + addWidth + "px";
		mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
	}
	function downMove (e) {
		var y = e.clientY;
		if(y > getPosition(boxDiv).top + boxDiv.offsetHeight){
			y = getPosition(boxDiv).top + boxDiv.offsetHeight - boxDiv.offsetTop;
		};
		var heightBefore = mainDiv.offsetHeight - 2;
		var mainY = mainDiv.offsetTop;
		var addHeight = y - heightBefore - mainY;
		mainDiv.style.height = heightBefore + addHeight + "px";
	}
	//鼠标移动事件
	window.onmousemove =  function(e){
		if(ifkeyDown == true){
			switch(contact){
				case "right":rightMove(e);
					break;
				case "up":upMove(e);
					break;
				case "left":leftMove(e);
					break;
				case "down":downMove(e);
					break;
				case "left-up":leftMove(e);upMove(e);
				    break;
				case "left-down":leftMove(e);downMove(e);
				    break;
				case "right-up":rightMove(e);upMove(e);
				    break;
				case "right-down":rightMove(e);downMove(e);
				    break;
			}
		}
		setChoice();
		setPreview();
	}
	//获取鼠标相对于屏幕左边的距离 利用offsetLeft
	function getPosition (node) {
		var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent =  node.offsetParent;
		while(parent != null){
			left += parent.offsetLeft;
			top += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return {"left":left,"top":top};
	}
	//设置选取区域高亮可见
	function setChoice(){
		var top = mainDiv.offsetTop;
		var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
		var left = mainDiv.offsetLeft;
		var pic2 = document.getElementById('pic2');
		pic2.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
	}

	//设置预览函数
	function setPreview(){
		var top = mainDiv.offsetTop;
		var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
		var left = mainDiv.offsetLeft;
		var pic3 = document.getElementById('pic3');
		pic3.style.left = -left+"px";
		pic3.style.top = -top+"px";
		pic3.style.clip = "rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)";
	}
}










