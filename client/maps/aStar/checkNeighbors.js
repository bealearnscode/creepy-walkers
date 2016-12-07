var isValidForPath = require('./isValidForPath')
//change to checkNeighbors when modularizing
module.exports = function(grid,xCoordinate, yCoordinate) {
	//define grid dimensions
	var gridWidth = grid[0].length
	var gridHeight = grid.length
	//define possible path moves based on coordinates around current node
	var neighbors = {
		north : yCoordinate - 1,
		south : yCoordinate + 1,
		east : xCoordinate + 1,
		west : xCoordinate - 1,

	}
	//checks possible path moves with based on if they are valid and still on the grid
	//make the -1 more semantic
	var northValidForPath = neighbors.north > -1 && isValidForPath(grid,xCoordinate, neighbors.north)
	var southValidForPath = neighbors.south < gridHeight && isValidForPath(grid,xCoordinate, neighbors.south)
	var eastValidForPath = neighbors.east < gridWidth && isValidForPath(grid,neighbors.east, yCoordinate)
	var westValidForPath = neighbors.west > -1 && isValidForPath(grid,neighbors.west, yCoordinate)
	//results array for possible path coordinates
	var validNeighborsResultsArray = []
	//if coordinate is valid for path, add to results array
	if(northValidForPath) {
		validNeighborsResultsArray.push({x:xCoordinate, y:neighbors.north})
	}
	if(southValidForPath) {
		validNeighborsResultsArray.push({x:xCoordinate,y:neighbors.south})
	}
	if(eastValidForPath) {
		validNeighborsResultsArray.push({x:neighbors.east, y:yCoordinate})
	}
	if(westValidForPath) {
		validNeighborsResultsArray.push({x: neighbors.west, y:yCoordinate})
	}
	//return array with possible valid coordinates for the path
	return validNeighborsResultsArray
}