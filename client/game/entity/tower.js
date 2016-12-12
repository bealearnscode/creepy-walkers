import makeTowerGraphicComponent from  '../component/tower-maker';
import makeTowerLocationComponent from '../component/location';
import tileLocationComponent from '../component/tile-location';

export default function makeTower(spec) {

	var tower = {};
	var graphics = makeTowerGraphicComponent({
		entityOfComponent: tower,
		spriteSheet: "assets/img/towers/Stark/jon-16x16-right.png",
	});

	var towerLocation = tileLocationComponent({
		x: spec.x,
		y: spec.y,
	});

	var components = {
		graphics: graphics,
		towerLocation: towerLocation,
	};

	tower.getX = function() {
		return components.towerLocation.getXLocation();
	};

	tower.getY = function() {
		return components.towerLocation.getYLocation();
	};

	tower.getComponentKeys = function() {
		return Object.keys(components);
	};

	tower.draw = function(ctx) {
		components.graphics.drawTower(ctx);
	};

	return Object.freeze(tower);

}