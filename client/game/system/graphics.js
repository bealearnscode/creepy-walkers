export default function graphicsSystem(entities, canvas) {
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
		
		var newWidth = (canvas.width / 16);
		var newHeight = (canvas.height / 16);
		
		ctx.scale(newWidth, newHeight);
		
		entities.forEach(function(entity) {
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