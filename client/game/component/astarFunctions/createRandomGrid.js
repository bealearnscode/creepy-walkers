module.exports = function(dimensions) {
	//create grid
	var grid = []
	for(var x=0; x< dimensions + 1; x++) {
		grid[x] = [];
		for(var y=0;y<dimensions + 1;y++) {
			grid[x][y] = 0;
		}
	}

	for(var x=0; x< dimensions + 1;x++) {
		for (var y=0; y< dimensions + 1;y++) {
			if(Math.random() > 0.75) {
				grid[x][y] = 1
			}
		}
	}
	return grid
}