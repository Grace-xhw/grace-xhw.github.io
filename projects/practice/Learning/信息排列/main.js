window.onload = function () {
	var card = document.getElementById('btn1');
	var list = document.getElementById('btn2');
	var imgs = document.getElementsByTagName('img');

	list.onclick = function(){
		list.className = 'btn-list-on';
		card.className = 'btn-car-off';
		for(var i=0; i < imgs.length; i++){
			imgs[i].src = './images/small.jpg';
			imgs[i].parentNode.className = 'a-img small';
		}
	}

	card.onclick = function(){
		card.className = 'btn-car-on';
		list.className = 'btn-list-off';
		for(var i=0; i < imgs.length; i++){
			imgs[i].src = "./images/big.jpg";
			imgs[i].parentNode.className = 'a-img';
		}
	}
}