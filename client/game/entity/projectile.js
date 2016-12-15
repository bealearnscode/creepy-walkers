import projectileGraphicComponent from '../component/projectile-graphic';
import projectileLocationComponent from '../component/location';
import collisionComponent from '../component/collision';
import movementComponent from '../component/projectile-movement';

export default function makeProjectile(spec, badguy) {
	if(!badguy.x) {
		console.log('hello')
	}
	var projectile = {};

	var graphics = projectileGraphicComponent({
		entity: projectile,
		projectile: "assets/img/projectiles/jon-weapon-8x8.png",
	});

	//starting location will be where the tower location is
	var projectileLocation = projectileLocationComponent({
		x: spec.x,
		y: spec.y,
	});

	var collision = collisionComponent({
		entity: projectile,
		entityType: "projectile",
		radius: 0.25,
	})

	var movement = movementComponent({
		entity: projectile,
		speed: 0.125,
	})

	var components = {
		graphics: graphics,
		projectileLocation: projectileLocation,
		collision: collision,
		movement: movement,
	};

	projectile.getXLocation = function() {
		return components.projectileLocation.getXLocation();
	};

	projectile.getYLocation = function() {
		return components.projectileLocation.getYLocation();
	};

	projectile.changeXLocation = function(delta) {
		return components.projectileLocation.changeXLocation(delta);
	}

	projectile.changeYLocation = function(delta) {
		return components.projectileLocation.changeYLocation(delta);
	}

	projectile.move = function() {
		//move the projectile toward the badguy
		//move will change the location component of the projectile,
		//and will make the projectile get closer to the badguy
		return components.movement.projectileTrajectory({x: badguy.x, y: badguy.y});
	};

	projectile.getRadius = function() {
		return components.collision.getRadius();
	};

	projectile.getEntityType = function() {
		return components.collision.getEntityType();
	};

	projectile.onCollision = function(entity) {
		return components.collision.collidesWith(entity);
	};

	projectile.draw = function(ctx) {
		return components.graphics.drawProjectile(ctx);
	};

	projectile.getComponentKeys = function() {
		return Object.keys(components);
	};

	return Object.freeze(projectile);
}