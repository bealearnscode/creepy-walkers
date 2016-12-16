import badGuyMovementComponent from '../component/badguy-movement';
import makeBadGuyGraphicComponent from '../component/badguy-graphic';
import makeLevelMapComponent from '../component/map';
import pathfinder from '../component/pathfinder';
import locationComponent from '../component/location';
import healthComponent from '../component/health';
import collisionComponent from '../component/collision';
import madeItComponent from '../component/madeIt'

export default function makeBadGuy() {
	var badguy = {};

	var map = makeLevelMapComponent().map;
	var path = { 
		path: pathfinder(map).path(),
	}
	//path for each enemy?
	//console.log(path)

	var location = locationComponent({
		x:path.path[0].x,
		y:path.path[0].y,
	});

	var graphics = makeBadGuyGraphicComponent({
		entity: badguy,
		whiteWalkerLeft: 'assets/img/enemies/white-walker-left.png',
		whiteWalkerRight: 'assets/img/enemies/white-walker-right.png',
		movement: movement,
	});

	var movement = badGuyMovementComponent({
		entity: badguy,
		path: path.path,
	});

	var health = healthComponent({
		amount: 10,
	});

	var collision = collisionComponent({
		entity: badguy,
		entityType: "badguy",
		radius: 0.5,
	});

	var madeIt = madeItComponent({
	})

	var components = {
		graphics: graphics,
		location: location,
		movement: movement,
		health: health,
		collision: collision,
		path: path,
		madeIt: madeIt,
	};
	

	badguy.getXLocation = function() {
		return components.location.getXLocation();
	};

	badguy.getYLocation = function() {
		return components.location.getYLocation();
	};

	badguy.getDirection = function() {
		return components.location.getDirection();
	}

	badguy.changeXLocation = function(delta) {
		return components.location.changeXLocation(delta);
	}

	badguy.changeYLocation = function(delta) {
		return components.location.changeYLocation(delta);
	}

	badguy.getPath = function() {
		return components.path;
	};

	badguy.getHealth = function() {
		return components.health.getHealth();
	};

	badguy.reduceHealth = function(damage) {
		return components.health.reduceHealth(damage);
	}

	badguy.getEntityType = function() {
		return components.collision.getEntityType();
	};

	badguy.getRadius = function() {
		return components.collision.getRadius();
	}

	badguy.onCollision = function(entity) {
		return components.collision.collidesWith(entity);
	};

	badguy.getComponentKeys = function() {
		return Object.keys(components);
	};

	badguy.draw = function(ctx,x,y) {
		components.graphics.drawBadGuy(ctx,badguy.getXLocation(),badguy.getYLocation());
	};

	badguy.madeItToEnd = function() {
		components.madeIt.pathFinished();
	}
		
	badguy.checkStatus = function() {
		return components.madeIt.checkStatus()
	}

	badguy.move = function() {
		components.movement.moveBadGuy();
	};

	
	return Object.freeze(badguy);
}
