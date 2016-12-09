export default function badGuyMovementComponent(spec) {
    var path = spec.path;
    console.log("Bad guy on the move");
    
    /*function moveBadGuy(path) {
        if(!finishedPath) {
		    if(!creepStarted) {
			 var currentCoordinate = path[0];
			 var creepStarted = true;
			 var nextCoordinate = path[1];
			 var creepX = currentCoordinate.x;
			 var creepY = currentCoordinate.y;
		}
		//check if the creep has reached the next coordinate
		if(creepX==nextCoordinate.x && creepY==nextCoordinate.y) {
			currentCoordinateIndex++;
			if(currentCoordinateIndex == path.length) {
				finishedPath = true;
			}
			currentCoordinate = nextCoordinate;
			nextCoordinate = path[currentCoordinateIndex]
			creepMoving = false;
		}

		//calculate where to move next
		if(!finishedPath) {
			if(nextCoordinate.y > currentCoordinate.y) {
				colDelta=4;
			}else if(nextCoordinate.y < currentCoordinate.y) {
				colDelta=-4
			}else {
				colDelta = 0 
			}
			if(nextCoordinate.x > currentCoordinate.x) {
				rowDelta = 4;
			}else if(nextCoordinate.x < currentCoordinate.x) {
				rowDelta = -4
			}else {
				rowDelta=0
			}
			creepMoving = true;
		}
		
		creepX+=rowDelta;
		creepY+=colDelta;*/
    
    
        
        
        /*return Object.freeze({
		    moveBadGuy: moveBadGuy,
	    });
    }*/
}
