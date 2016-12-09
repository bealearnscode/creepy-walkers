//input system
export default function inputSystem(entities, gameCanvas) {

	var locationEntities = entities;
	var canvas = gameCanvas;
	var ctx = canvas.getContext('2d');

	function run() {
		canvas.addEventListener("click", clickHandler, false);
	}

	//TODO: create new entity with x and y

	function clickHandler(e) {
		console.log("you clicked the canvas");
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;

		// var xPercent = (x / canvas.width) * 2 - 1;
		// var yPercent = y / -canvas.height + 1;
		//console.log('x:', xPercent, 'y:', yPercent);

		//intended to rescale canvas to a 16 tile grid
		var tileWidthAndHeight = 16;
		var xTile = (x / canvas.width) * tileWidthAndHeight;
		var yTile = (y / canvas.height) * tileWidthAndHeight;
		console.log(`x: ${xTile}, y: ${yTile}`);

		//if xTile is between 0 and 1 && yTile is between 0 and 1, you're at the top left tile
		/*if((xTile > 0 && xTile < 1) && (yTile > 0 && yTile < 1)) {
			console.log("top left tile");
		}*/

		// for(var i = 0; i <= tileWidthAndHeight; i++) {
		// 	for(var j = 0; j <= tileWidthAndHeight; j++) {
		// 		console.log("what am i doing?");
		// 		if((xTile > j && xTile < i) && (yTile > j && yTile < i)) {
		// 			console.log(j, i);
		// 		}
		// 	}
		// }

		// var arr = [];
		// for(var x = 0; x < tileWidthAndHeight; x++) {
		// 	arr[x] = [];
		// 	for(var y = 0; y < tileWidthAndHeight; y++) {
		// 		arr[x][y] = y;

		// 		if((xTile > y && xTile < x) && (yTile > y && yTile < x)) {
		// 			console.log(arr[y][x]);
		// 		}
		// 	}
		// }

		// console.log(arr);

		locationEntities.forEach(function(entity) {
			if(entity.getComponentKeys().includes("location")) {
				console.log("you draw!");
				entity.draw(ctx, xTile, yTile);
			}
		});
	}
	
		//if (entity.getComponentKeys().includes("tower")) {
			
		//}

	return Object.freeze ({
		run: run,
		clickHandler: clickHandler,
	});

}