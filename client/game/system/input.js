import makeTower from '../entity/tower';
export default function inputSystem(entities, gameCanvas) {

	var locationEntities = entities;
	var canvas = gameCanvas;
	var ctx = canvas.getContext('2d');

	function run() {
		canvas.addEventListener("click", clickHandler, false);
	}

	function clickHandler(e) {
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;

		//intended to rescale canvas to a 16 tile grid
		var tileWidthAndHeight = 16;
		var xTile = Math.floor((x / canvas.width) * tileWidthAndHeight);
		var yTile = Math.floor((y / canvas.height) * tileWidthAndHeight);
		console.log(`x: ${xTile}, y: ${yTile}`);

		locationEntities.forEach(function(entity) {
			if (entity.getComponentKeys().includes("towerLocation")) {
				console.log("you've placed a tower");
				entities.push(makeTower({x: xTile, y: yTile}));
				console.log(entities);
			}
		});
	}

	return Object.freeze ({
		run: run,
		clickHandler: clickHandler,
	});

}