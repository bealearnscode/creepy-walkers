import badGuyMovementComponent from '../component/badguy-movement';
import makeBadGuyGraphicComponent from '../component/badguy-graphic';
import makeLevelMapComponent from '../component/map';
import pathfinder from '../component/pathfinder';
import locationComponent from '../component/location';

export default function makeBadGuy(spec) {

	var badguy = {};
	var map = makeLevelMapComponent().map;
	var path = pathfinder(map).path();
	
	var graphics = makeBadGuyGraphicComponent({
		entity: badguy,
		whiteWalkerLeft: 'assets/img/enemies/white-walker-16x16-left.png',
		whiteWalkerRight: 'assets/img/enemies/white-walker-16x16-right.png',
		movement: movement,
	});

	var location = locationComponent({
		x:path[0].x,
		y:path[0].y,
	});

	var movement = badGuyMovementComponent({
		entity: badguy,
	});

	var components = {
		graphics: graphics,
		location: location,
		path: path,
		movement: movement
	};

	badguy.getXLocation = function() {
		return components.location.getXLocation();
	};

	badguy.getYLocation = function() {
		return components.location.getYLocation();
	};

	badguy.getDirection = function() {
		return components.location.getDirection()
	}

	badguy.changeXLocation = function(delta) {
		return components.location.changeXlocation(delta)
	}

	badguy.changeYlocation = function(delta) {
		return components.location.changeYlocation(delta)
	}

	badguy.getPath = function() {
		return components.path;
	};

	badguy.getComponentKeys = function() {
		return Object.keys(components);
	};

	badguy.draw = function(ctx,x,y) {
		components.graphics.drawBadGuy(ctx,badguy.getXLocation(),badguy.getYLocation());
	};
	
	badguy.move = function() {
		components.movement.moveBadGuy();
	};

	return Object.freeze(badguy);
}