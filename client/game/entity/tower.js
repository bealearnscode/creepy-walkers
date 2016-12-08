import makeTowerGraphicComponent from  '../component/tower-maker';
import makeTowerLocationComponent from '../component/tower-location';

export default function makeTower() {

	console.log("make tower");
	var tower = {};
	var graphics = makeTowerGraphicComponent({
		entityOfComponent: tower,
		spriteSheet: "assets/img/Stark-PNG/jon-16x16-left.png",
	});
	var location = makeTowerLocationComponent({
		x: 200,
		y: 200,
	});

	var components = {
		graphics: graphics,
		location: location,
	};

	tower.getX = function() {
		return components.location.getXLocation();
	};

	tower.getY = function() {
		return components.location.getYLocation();
	};

	tower.getComponentKeys = function() {
		return Object.keys(components);
	};

	tower.draw = function(ctx, x, y) {
		components.graphics.drawTower(ctx, tower.getX(), tower.getY());
	};

	return Object.freeze(tower);

}