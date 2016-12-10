import badGuyMovementComponent from '../component/badguy-movement';
import makeBadGuyGraphicComponent from '../component/badguy-graphic';
import makeLevelMapComponent from '../component/map';
import pathfinder from '../component/pathfinder';

export default function makeBadGuy() {

	var badguy = {};
	var map = makeLevelMapComponent().map;
	var spawnLocation = map.startingPoint;
	var path = pathfinder(map).path();
	var movement = badGuyMovementComponent({
		entity: badguy,
		path: path,
	});
	var graphics = makeBadGuyGraphicComponent({
		whiteWalkerLeft: 'assets/img/enemies/white-walker-16x16-left.png',
		whiteWalkerRight: 'assets/img/enemies/white-walker-16x16-right.png',
		movement: movement,
		path:path
	});

	var components = {
		graphics: graphics,
		spawnLocation: spawnLocation,
		path: path,
		movement: movement
	};

	badguy.getXLocation = function() {
		return components.spawnLocation.x;
	};

	badguy.getYLocation = function() {
		return components.spawnLocation.y;
	};

	badguy.getPath = function() {
		return components.path;
	};

	badguy.getComponentKeys = function() {
		return Object.keys(components);
	};

	badguy.draw = function(ctx) {
		components.graphics.drawBadGuy(ctx);
	};
	
	badguy.move = function() {
		components.movement.moveBadGuy();
	};

	return Object.freeze(badguy);
}