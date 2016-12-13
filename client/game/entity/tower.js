import makeTowerGraphicComponent from  '../component/tower-maker';
import makeTowerLocationComponent from '../component/location';
import tileLocationComponent from '../component/tile-location';
import collisionComponent from '../component/collision';

export default function makeTower(spec) {

	var tower = {};
	var graphics = makeTowerGraphicComponent({
		entityOfComponent: tower,
		spriteSheet: "assets/img/towers/Stark/jon-left.png",
	});

	var towerLocation = tileLocationComponent({
		x: spec.x,
		y: spec.y,
	});

	var collision = collisionComponent({
		entity: tower,
		entityType: "tower",
		radius: 2,
	});

	var components = {
		graphics: graphics,
		towerLocation: towerLocation,
		collision: collision,
	};

	tower.getXLocation = function() {
		return components.towerLocation.getXLocation();
	};

	tower.getYLocation = function() {
		return components.towerLocation.getYLocation();
	};

	tower.getEntityType = function() {
		return components.collision.getEntityType();
	};

	tower.getRadius = function() {
		return components.collision.getRadius();
	}

	tower.onCollision = function(entity) {
		return components.collision.collidesWith(entity);
	};

	tower.getComponentKeys = function() {
		return Object.keys(components);
	};

	tower.draw = function(ctx) {
		components.graphics.towerRange(ctx);
		components.graphics.drawTower(ctx);
	};

	return Object.freeze(tower);

}