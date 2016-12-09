module.exports = function(dimensions,parentNode,coordinates) {
	var gridWidth = dimensions;
	var newNode = {
			//pointer to another node object
			Parent: parentNode,
			//array index represented as an object containing x and y coordinates, should be unique for each coordinate
			value: coordinates.x + (coordinates.y * gridWidth),
			//coordinates for this node
			x: coordinates.x,
			y: coordinates.y,
			//heurisitic cost of an entire path using this node
			heuristicCost: 0,
			//distance cost, what is returned by the manhattan distance function
			distanceCost: 0
		};
		return newNode;
}