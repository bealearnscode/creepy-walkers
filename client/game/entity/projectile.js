import projectileGraphicComponent from '../component/projectile-graphic';
import projectileLocation from '../component/location';
import collisionComponent from '../component/collision';

export default function makeProjectile(spec) {
	var projectile = {};

	var graphics = projectileGraphicComponent({
		entity: projectile,
		projectile: "assets/img/projectiles/jon-weapon-8x8.png",
	});

	//starting location will be where the tower location is
	var location = projectileLocation({
		x: spec.x,
		y: spec.y,
	});

	var collision = collisionComponent({
		entity: projectile,
		entityType: "projectile",
		radius: 0.25,
	})

	var components = {
		graphics: graphics,
		location: location,
		collision: collision,
	};

	projectile.getXLocation = function() {
		return components.location.getXLocation();
	};

	projectile.getYLocation = function() {
		return components.location.getYLocation();
	};

	projectile.move = function() {
		//move the projectile toward the badguy
		//move will change the location component of the projectile,
		//and will make the projectile get closer to the badguy
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