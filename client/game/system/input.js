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

		var mapWidthAndHeight = 16;
		var xTile = (x / canvas.width) * mapWidthAndHeight;
		var yTile = (y / canvas.height) * mapWidthAndHeight;
		console.log(`x: ${xTile}, y: ${yTile}`);

		//if xTile is between 0 and 1 && yTile is between 0 and 1, you're at the top left tile
		// if((xTile > 0 && xTile < 1) && (yTile > 0 && yTile < 1)) {
		// 	console.log("top left tile");
		// }

		// for(var i = 0; i <= mapWidthAndHeight; i++) {
		// 	for(var j = 0; j <= mapWidthAndHeight; j++) {
		// 		console.log("what am i doing?");
		// 		if((xTile > j && xTile < i) && (yTile > j && yTile < i)) {
		// 			console.log(j, i);
		// 		}
		// 	}
		// }

		var arr = [];
		for(var x = 0; x < mapWidthAndHeight; x++) {
			arr[x] = [];
			for(var y = 0; y < mapWidthAndHeight; y++) {
				arr[x][y] = y;

				if((xTile > y && xTile < x) && (yTile > y && yTile < x)) {
					console.log(arr[y][x]);
				}
			}
		}

		console.log(arr);

		// locationEntities.forEach(function(entity) {
		// 	if(entity.getComponentKeys().includes("location")) {
		// 		console.log("you draw!");
		// 		//entity.draw(ctx);
		// 	}
		// });
	}

	return Object.freeze ({
		run: run,
		clickHandler: clickHandler,
	});

}