export default function projectileMovementComponent(spec) {
	var entity = spec.entity;
	var speed = spec.speed;
	var colDelta = 0;
	var rowDelta = 0;
	var previousCreepLocation;
	var currentCreepLocation ;

	function projectileTrajectory(creepLocation) {
		previousCreepLocation = currentCreepLocation;
		var toCreepX = (entity.getXLocation() - creepLocation.x);
		var toCreepY = (entity.getYLocation() - creepLocation.y);

		if (toCreepY < 0) {
			colDelta = speed;
		}
		if (toCreepY > 0) {
			colDelta = -speed;
		}
		if (toCreepX < 0) {
			rowDelta = speed;
		}
		if (toCreepX > 0) {
			rowDelta = -speed;
		}
		
		//move towards creep
		entity.changeXLocation(rowDelta);
		entity.changeYLocation(colDelta);
		currentCreepLocation = creepLocation
	}

	return Object.freeze({
		projectileTrajectory: projectileTrajectory,
	});
}