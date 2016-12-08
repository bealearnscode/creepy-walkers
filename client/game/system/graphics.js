//graphics system
export default function graphicsSystem(entities, gameCanvas) {

	var graphicalEntities = entities;
	var canvas = gameCanvas;
	var ctx = canvas.getContext('2d');

	function run() {
		requestAnimationFrame(tick);
	}

	function tick() {
		if(canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		}

		//clear the canvas every frame
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.save();
		/*ctx.translate(canvas.width + 1,canvas.height + 1);*/
	
		//console.log("canvas width: " + canvas.width + " canvas height: " +  canvas.height);
		
		var newWidth = ((canvas.width / canvas.width) * 16) - 1;
		var newHeight = ((canvas.height / canvas.height) * 16) - 1;
		/*ctx.scale(canvas.width, newWidth);
		ctx.scale(canvas.height, newHeight);*/
		console.log("canvas width: " + newWidth + "canvas height: " +  newHeight);
		ctx.scale(newWidth, newHeight);
		console.log("canvas width: " + canvas.width + " canvas height: " +  canvas.height)
		
		
		
		//Every graphic entity that has a graphic component needs a draw function
		graphicalEntities.forEach(function(entity) {
			if(entity.getComponentKeys().includes("graphics")) {
				entity.draw(ctx);
			}
		});

		ctx.restore();

		requestAnimationFrame(tick);
	}

	return Object.freeze({
		run: run,
		tick: tick,
	});
	
}