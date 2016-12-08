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