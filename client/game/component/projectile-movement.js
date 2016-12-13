export default function projectileMovementComponent(spec) {
	var entity = spec.entity;
	console.log(entity)
	var speed = spec.speed;
	var colDelta = 0;
	var rowDelta = 0;



	function projectileTrajectory(creepLocation,projectileLocation) {
		var creepXLocation = creepLocation.x
		var creepYLocation = creepLocation.y
		var projectileXLocation = projectileLocation.x
		var projectileYLocation = projectileLocation.y

		console.log('creepxlocation',creepXLocation)
			console.log('creepYlocation',creepYLocation)
		console.log('projectileXLocation',projectileXLocation)
		console.log('projectileYLocation',projectileYLocation)	
		if(creepYLocation > projectileYLocation) {
			colDelta = speed;
		}else if (creepYLocation < projectileYLocation) {
			colDelta =-speed;
		}else {
			colDelta = 0;
		}
		if(creepXLocation > projectileXLocation) {
			rowDelta = speed;
		}else if(creepXLocation < projectileXLocation) {
			rowDelta = -speed;
		}else {
			rowDelta = 0;
		}
		
		entity.changeXLocation(rowDelta);
		entity.changeYLocation(colDelta);
	}

	return Object.freeze({
		projectileTrajectory: projectileTrajectory,
	})
}