export default function collisionComponent(spec) {

	var entity = spec.entity;
	var radius = spec.radius;

	function collidesWith(otherEntity) {
		var positionA = {
			x: entity.getXLocation(),
			y: entity.getYLocation(),
		};
		var positionB = {
			x: otherEntity.getXLocation(),
			y: otherEntity.getYLocation(),
		};

		var radiusA = radius;
		var radiusB = otherEntity.radius;

		var diff = {x: positionA.x - positionB.x,
					y: positionA.y - positionB.y};

		var distanceSquared = diff.x * diff.x + diff.y * diff.y;

		var radiusSum = radiusA + radiusB;

		return distanceSquared < radiusSum * radiusSum;
	}

	return Object.freeze({
		collidesWith: collidesWith,
	});

}