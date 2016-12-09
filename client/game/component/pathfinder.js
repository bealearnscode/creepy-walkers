//this component needs to know about what the current map is

export default function pathfinder(spec) {
	//map layout variables
	// var mapLayout = spec.layout;
	var mapLayout = spec.layout;
	var mapDimensions = spec.dimensions;
	var startingPoint = spec.startingPoint;
	var endPoint = spec.endPoint;
	var mapSize = mapLayout.length * mapDimensions;

	//a* variables
	var coordinateValueArray = new Array(mapSize)
	var startingNode = createNode(mapDimensions, null, startingPoint)
	var endingNode = createNode(mapDimensions, null, endPoint)
	var nodesToBeChecked = [startingNode]
	var checkedNodes = [];
	var nodeNeighbors;
	var currentNode;
	var pathNode;
	var lowestHeuristicIndex = 0;
	var largestHeuristicValue = mapSize
	var pathCoordinateArray = []

	function createNode(mapDimensions,parentNode,coordinates) { 
		var newNode = {
				//pointer to another node object
				Parent: parentNode,
				//array index represented as an object containing x and y coordinates, should be unique for each coordinate
				value: coordinates.x + (coordinates.y * 3),
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

	function isValidForPath(map,xCoordinate, yCoordinate) {
		return ((map[xCoordinate] != null) && 
					(map[xCoordinate][yCoordinate] != null) && 
					(map[xCoordinate][yCoordinate] != 1))
	}
	//based on manhattan distance
	function distanceFunction(Point, Goal) {
		return Math.abs(Point.x - Goal.x) + Math.abs(Point.y - Goal.y);
	}

	function checkNeighbors(grid,xCoordinate, yCoordinate) {
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

	function translatePathNodesIntoCoordinates(pathNode) {
		if(pathNode === null) {
				return pathCoordinateArray.reverse()
			}

		pathCoordinateArray.push({x:pathNode.x, y:pathNode.y})
		return translatePathNodesIntoCoordinates(pathNode.Parent)
	}

	function calculatePathNodes() {
		console.log(endingNode.value)
		// if(isValidForPath(mapLayout,startingPoint.x,startingPoint.y) == false) {
		// 	return 'invalid starting point'
		// }
		if(nodesToBeChecked.length) {
			for(var i =0; i<nodesToBeChecked.length;i++) {
				if(nodesToBeChecked[i].heurisiticCost < largestHeuristicValue) {
					largestHeuristicValue = nodesToBeChecked[i].heuristicCost
					lowestHeuristicIndex = i
				}
			}
			//take the next node to be checked and removes it from the need to be checked array
			currentNode = nodesToBeChecked.splice(lowestHeuristicIndex,1)[0]
			console.log('nodebeingchecked')
			console.log(currentNode)
			//checks to see if the current node is the destination node
			if(currentNode.value === endingNode.value) {
				console.log('inside end condition')
				return translatePathNodesIntoCoordinates(currentNode)
			}
			//if the current node is not the destination
			else {
				//get neighboring nodes that are valid
				nodeNeighbors = checkNeighbors(mapLayout,currentNode.x, currentNode.y)
				//iterate through them
				for(var i = 0; i < nodeNeighbors.length; i++) {
					//potential path nodes
					pathNode = createNode(mapLayout,currentNode,nodeNeighbors[i]);
					//checks to see if pathNode has been checked yet
					if(!coordinateValueArray[pathNode.value]) {
						pathNode.distanceCost = pathNode.distanceCost + distanceFunction(nodeNeighbors[i], currentNode);
						pathNode.heurisiticCost = pathNode.distanceCost + distanceFunction(nodeNeighbors[i], endPoint);
						nodesToBeChecked.push(pathNode);
						//sets the node to true which repsents it has beenc hecked
						coordinateValueArray[pathNode.value] = true;
					}
				}
				checkedNodes.push(currentNode)
				return calculatePathNodes()
			}
		}
	}


	return Object.freeze ({
		path: calculatePathNodes,
	})	
}