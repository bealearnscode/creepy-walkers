export default function badGuyMovementComponent(spec) {

    var path = spec.path;
    //if we want the location, get it through the entity
    var finishedPath = false;
    var creepStarted = false;
    var colDelta = 0;
    var rowDelta = 0;
    var currentCoordinate;
    var nextCoordinate;
    var creepX = 0;
    var creepY = 0;
    var currentCoordinateIndex = 0;

    function moveBadGuy() {
        if(!finishedPath) {
		    if(!creepStarted) {
				currentCoordinate = path[0];
				creepStarted = true;
				nextCoordinate = path[1];
				creepX = currentCoordinate.x;
				creepY = currentCoordinate.y;
				// console.log("creepX", creepX);
				// console.log("creepY", creepY);
				// console.log("currentCoordinate", currentCoordinate);
				// console.log("nextCoordinate", nextCoordinate);
			}

			//check if the creep has reached the next coordinate
			if(creepX == nextCoordinate.x || creepY == nextCoordinate.y) {
				currentCoordinateIndex++;
				console.log("currentCoordinateIndex", currentCoordinateIndex);
				if(currentCoordinateIndex == path.length) {
					console.log("We're done");
					finishedPath = true;
				}
				currentCoordinate = nextCoordinate;
				nextCoordinate = path[currentCoordinateIndex];
				console.log("path[currentCoordinateIndex]", path[currentCoordinateIndex]);
				// creepMoving = false;
			}

			//calculate where to move next
			if(!finishedPath) {
				if(nextCoordinate.y > currentCoordinate.y) {
					colDelta = 1/10;
				}else if(nextCoordinate.y < currentCoordinate.y) {
					colDelta = -1/10;
				}else {
					colDelta = 0;
				}
				if(nextCoordinate.x > currentCoordinate.x) {
					rowDelta = 1/10;
				}else if(nextCoordinate.x < currentCoordinate.x) {
					rowDelta = -1/10;
				}else {
					rowDelta = 0;
				}
				//creepMoving = true;
			}
			rowDelta = parseInt(rowDelta.toFixed(1));
			colDelta = parseInt(colDelta.toFixed(1));
			//console.log("rowDelta", rowDelta);
			//console.log("colDelta", colDelta);
			creepX += rowDelta;
			creepY += colDelta;
			//console.log("creepX", creepX);
			//console.log("creepY", creepY);
			console.log("currentCoordinate", currentCoordinate);
			console.log("nextCoordinate", nextCoordinate);

		}

		return {x: creepX, y: creepY};
    
    }
        
    return Object.freeze ({
	    moveBadGuy: moveBadGuy,
    });

}

