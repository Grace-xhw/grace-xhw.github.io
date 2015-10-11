window.onload = function(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	var watermarkCanvas = document.getElementById('watermark-canvas');
	var watermarkContext = watermarkCanvas.getContext('2d');

	var slider = document.getElementById('scale-range');

	var image = new Image();

	canvas.width = 800;
	canvas.height = 600;

	// context.fillStyle = "red";
	// context.fillRect(100, 100, 200, 200);

	var scale = slider.value;

	image.src = "img/img-lg.jpg";
	image.onload = function(){
		// context.drawImage(image, 0, 0, canvas.width, canvas.height);
		// context.drawImage(image, 600, 200, 400, 400,  0, 0,canvas.width, canvas.height);
		drawImageByScale(scale);
		slider.onmousemove = function(){
			scale = slider.value;
			drawImageByScale(scale);
		}
	}

	// setup watermark canvas
	watermarkCanvas.width = 420;
	watermarkCanvas.height = 80;
	watermarkContext.font = "bold 50px Arial";
	watermarkContext.fillStyle = "rgba(255,255,255,0.5)";
	watermarkContext.textBaseline = "middle";
	watermarkContext.fillText("www.grace.com", 20, 50);


	function drawImageByScale(scale){
		var imageWidth = 800 * scale;
		var imageHeight = 600 * scale;

		// var sx = imageWidth/2 - canvas.width/2;
		// var sy = imageHeight/2 - canvas.height/2;

		// context.drawImage(image, sx, sy, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);

		var dx = canvas.width/2 - imageWidth/2;
		var dy = canvas.height/2 - imageHeight/2;

		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(image, dx, dy, imageWidth, imageHeight);
		context.drawImage(watermarkCanvas, canvas.width - watermarkCanvas.width, canvas.height - watermarkCanvas.height);
	} 
}