export default function projectileMovementComponent(spec) {
	var entity = spec.entity;
	var speed = spec.speed;
	var colDelta = 0;
	var rowDelta = 0;



	function projectileTrajectory(creepLocation) {
		//calculate direction and distance towards creep
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
		if (toCreepX === 0) {
			rowDelta = 0;
		}
		if (toCreepY === 0) {
			colDelta = 0;
		}

		//move towards creep
		entity.changeXLocation(rowDelta);
		entity.changeYLocation(colDelta);

		// console.log('creepxlocation',creepXLocation)
		// 	console.log('creepYlocation',creepYLocation)
		// console.log('projectileXLocation',projectileXLocation)
		// console.log('projectileYLocation',projectileYLocation)	
		// if(creepYLocation > projectileYLocation) {
		// 	colDelta = speed;
		// }else if (creepYLocation < projectileYLocation) {
		// 	colDelta =-speed;
		// }else {
		// 	colDelta = 0;
		// }
		// if(creepXLocation > projectileXLocation) {
		// 	rowDelta = speed;
		// }else if(creepXLocation < projectileXLocation) {
		// 	rowDelta = -speed;
		// }else {
		// 	rowDelta = 0;
		// }
		
		// entity.changeXLocation(rowDelta);
		// entity.changeYLocation(colDelta);


		
		
		//console.log(entity.getXLocation());
		//console.log(creepLocation.x);
		//console.log("toCreepX", toCreepX);
		//console.log("toCreepY", toCreepY);

		//normalize
		// var toCreepLength = Math.sqrt(toCreepX * toCreepX + toCreepY * toCreepY);
		// toCreepX /= toCreepLength;
		// toCreepY /= toCreepLength;

		
	}

	return Object.freeze({
		projectileTrajectory: projectileTrajectory,
	})
}