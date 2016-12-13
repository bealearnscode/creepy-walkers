import makeTower from '../entity/tower';
import level from '../entity/level';
import makeProjectile from '../entity/projectile';

export default function inputSystem(entities, canvas) {

	var ctx = canvas.getContext('2d');
	var map = level().getMap().layout;
	//map is an object, convert it to an array
	var mapArr = Object.keys(map).map(function (key) { return map[key]; });

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

		if(mapArr[yTile][xTile] === 1) {
			console.log("placeable")
			entities.push(makeTower({x: xTile, y: yTile}));
			//set the location where you click to 2 
			//so you aren't able to place towers on top of each other
			mapArr[yTile][xTile] = 2;
			//console.log(entities);
		}
		else {
			console.log("invalid tile location");
			//console.log(entities);
		}

	}

	return Object.freeze ({
		run: run,
		clickHandler: clickHandler,
	});

}