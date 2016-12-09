//input system
export default function inputSystem(entities, gameCanvas) {

	var locationEntities = entities;
	var canvas = gameCanvas;
	var ctx = canvas.getContext('2d');

	function run() {
		canvas.addEventListener("click", clickHandler, false);
	}

	function clickHandler(e) {
		console.log("you clicked the canvas");
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;

		//intended to rescale canvas to a 16 tile grid
		var tileWidthAndHeight = 16;
		var xTile = Math.floor((x / canvas.width) * tileWidthAndHeight);
		var yTile = Math.floor((y / canvas.height) * tileWidthAndHeight);
		console.log(`x: ${xTile}, y: ${yTile}`);

		locationEntities.forEach(function(entity) {
			if(entity.getComponentKeys().includes("location")) {
				console.log("you draw!");
				entity.draw(ctx, xTile, yTile);
			}
			//if (entity.getComponentKeys().includes("tower")) {
			
			//}
		});
	}

	return Object.freeze ({
		run: run,
		clickHandler: clickHandler,
	});

}