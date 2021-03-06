window.onload = function () {
	var list = document.getElementById('list');
	var boxs = list.children;
	var timer;

	// 格式化日期
	function formateDate(date){
		var y = date.getFullYear();
		var m = date.getMonth();
		var d = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		m = m > 9 ? m : '0'+ m;
		return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
	}

	// 关闭分享,删除节点
	function removeNode(node){
		node.parentNode.removeChild(node);
	}
	// 赞分享
	function praiseBox(box, el){
		var txt = el.innerHTML;
		var praisesTotal = box.getElementsByClassName('praises-total')[0];
		var oldTotal = parseInt(praisesTotal.getAttribute('total'));
		var newTotal;
		if (txt == '赞') {
			newTotal = oldTotal + 1;
			praisesTotal.setAttribute('total', newTotal);
			praisesTotal.innerHTML = (newTotal == 1) ? '我觉得很赞' : '我和'+ oldTotal + '个人觉得很赞';
			el.innerHTML = '取消赞';
		}else{
			newTotal = oldTotal - 1;
			praisesTotal.setAttribute('total', newTotal);
			praisesTotal.innerHTML = (newTotal == 0) ? '': newTotal + '个人觉得很赞';
			el.innerHTML = '赞';
		};
		praisesTotal.style.display = (newTotal == 0) ? 'none' : 'block';
	}

	// 添加评论
	function reply(box, el){
		var commentlist = box.getElementsByClassName('comment-list')[0];
		var textarea = box.getElementsByClassName('comment')[0];
		var commentBox = document.createElement('div');
		commentBox.className = 'comment-box clearfix';
		commentBox.setAttribute('user','self');
		commentBox.innerHTML =
		    '<img class="myhead" src="images/my.jpg" alt=""/>' +
		        '<div class="comment-content">' +
		        '<p class="comment-text"><span class="user">我：</span>' + textarea.value + '</p>' +
		        '<p class="comment-time">' +
		        formateDate(new Date()) +
		        '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
		        '<a href="javascript:;" class="comment-operate">删除</a>' +
		        '</p>' +
		        '</div>'
		commentlist.appendChild(commentBox);
		textarea.value = '';
		textarea.onblur();
	}

	// 回复赞
	function praiseReply(el) {
	    var myPraise = parseInt(el.getAttribute('my'));
	    var oldTotal = parseInt(el.getAttribute('total'));
	    var newTotal;
	    if (myPraise == 0) {
	        newTotal = oldTotal + 1;
	        el.setAttribute('total', newTotal);
	        el.setAttribute('my', 1);
	        el.innerHTML = newTotal + ' 取消赞';
	    }
	    else {
	        newTotal = oldTotal - 1;
	        el.setAttribute('total', newTotal);
	        el.setAttribute('my', 0);
	        el.innerHTML = (newTotal == 0) ? '赞' : newTotal + ' 赞';
	    }
	    el.style.display = (newTotal == 0) ? '' : 'inline-block'
	}

	// 操作回复的评论
	function operate(el){
		var commentBox = el.parentNode.parentNode.parentNode;
		var box = commentBox.parentNode.parentNode.parentNode;
		var txt = el.innerHTML;
		var user = commentBox.getElementsByClassName('user')[0].innerHTML;
		var textarea = box.getElementsByClassName('comment')[0];
		if (txt == '回复') {
			textarea.focus();
			textarea.value = '回复' + user;
			textarea.onkeyup();
		}else{
			removeNode(commentBox);
		};
	}

	// 把事件代理到每条分享的box上
	for(var i = 0; i < boxs.length; i++){
		boxs[i].onclick = function(e){
			e = e || window.event;
			ele = e.srcElement || e.target;
			switch (ele.className){
				case 'close':
					removeNode(ele.parentNode);
					break;
				case 'praise':
					praiseBox(ele.parentNode.parentNode.parentNode,ele);
					break;
				case 'btn':
					reply(ele.parentNode.parentNode.parentNode, ele);
					break;
				case 'btn btn-off':
					clearTimeout(timer);
					break;
				case 'comment-praise':
				    praiseReply(ele);
				    break;
				case 'comment-operate':
					operate(ele);
					break;
			}
		}

		//评论 
		var textArea = boxs[i].getElementsByClassName('comment')[0];

		// 评论获取焦点
		textArea.onfocus = function(){
			this.parentNode.className = 'text-box text-box-on';
			this.value = this.value == '评论...' ? '' : this.value;
			this.onkeyup();
		}

		// 评论失去焦点
		textArea.onblur = function(){
			var me = this;
			var val = me.value;
			if (val == '') {
				timer = setTimeout(function(){
					me.value = '评论...';
					me.parentNode.className = 'text-box';
				},400)
			};
		}

		//评论按键事件
		textArea.onkeyup = function(){
			var val = this.value;
			var len = val.length;
			var els = this.parentNode.children;
			var btn = els[1];
			var word = els[2];
			if (len <= 0 || len > 140) {
				btn.className = 'btn btn-off';
			}else{
				btn.className = 'btn';
			};
			word.innerHTML = len + '/140';
		}	











	}
}