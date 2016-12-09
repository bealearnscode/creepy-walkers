	//checks to see if neighboring coordinate is valid to be checked as a possible path coordinate
module.exports = function(grid,xCoordinate, yCoordinate) {
	return ((grid[xCoordinate] != null) && 
				(grid[xCoordinate][yCoordinate] != null) && 
				(grid[xCoordinate][yCoordinate] != 1))
}