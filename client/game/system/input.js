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

		if(mapArr[yTile][xTile] === 1) {
			entities.forEach(function(entity,index){
				if(entity.getComponentKeys().includes("money")) {
					if(entity.getMoney() >= 60) {
						entities.push(makeTower({x: xTile, y: yTile}));
						mapArr[yTile][xTile] = 2;
						entity.updateMoney(-60);
					}
				}
			});
		}
	}

	return Object.freeze ({
		run: run,
		clickHandler: clickHandler,
	});
}