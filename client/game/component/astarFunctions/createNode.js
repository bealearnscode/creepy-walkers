module.exports = function(dimensions,parentNode,coordinates) {
	var newNode = {
			//pointer to another node object
			Parent: parentNode,
			//array index represented as an object containing x and y coordinates, should be unique for each coordinate
			value: coordinates.y + (coordinates.x * dimensions),
			//coordinates for this node
			x: coordinates.y,
			y: coordinates.x,
			//heurisitic cost of an entire path using this node
			heuristicCost: 0,
			//distance cost, what is returned by the manhattan distance function
			distanceCost: 0
		};
		return newNode;
}