var distanceFunction = require('./distanceFunction')
var isValidForPath = require('./isValidForPath')
var checkNeighbors = require('./checkNeighbors')
var createNode = require('./createNode')
var translatePathNodesIntoCoordinates = require('./translatePathNodesIntoCoordinates')
var createRandomGrid = require('./createRandomGrid')

export default function findPath(grid,pathStart,pathEnd) {
	//setup dimensions for grid
	var gridWidth = grid[0].length;
	var gridHeight = grid.length;
	var gridSize = gridWidth * gridHeight;
	var pathStartingPoint = createNode(grid,null, {x:pathStart[0], y:pathStart[1]});
	var pathEndPoint = createNode(grid,null, {x:pathEnd[0], y:pathEnd[1]});
	//creates a new grid containing all of the points
	var uniqueCoordinateValueArray = new Array(gridSize);
	//list of nodes that need to be checked and processed
	var nodesToBeChecked = [pathStartingPoint]
	//list of nodes that have already been checked and processed
	var checkedNodes = [];
	//references to neighboring nodes
	var nodeNeighbors;
	//references to current node
	var currentNode;
	//reference to a node that is possible for the path
	var pathNode;
	//array of coordinates
	var pathCoordinateArray = []
	//index of lowest heuristic cost in nodesToBeChecked
	var lowHeuristicIndex = 0
	//value for largest heuristic value
	var largestHeuristic = gridSize 
	//Path function
	//startiung and endpoint point for path
	//variables taken from parameters main function, 0 index being xCoordinate and 1 index being yCoorindate
	function calculatePathNodes() {
		if(isValidForPath(grid,pathStart[0],pathStart[1]) == false) {
			return 'invalid starting point'
		}
		if(nodesToBeChecked.length) {
			for(var i =0; i<nodesToBeChecked.length;i++) {
				if(nodesToBeChecked[i].heurisiticCost < largestHeuristic) {
					largestHeuristic = nodesToBeChecked[i].heuristicCost
					lowHeuristicIndex = i
				}
			}
			//take the next node to be checked and removes it from the need to be checked array
			currentNode = nodesToBeChecked.splice(lowHeuristicIndex,1)[0]

			//checks to see if the current node is the destination node
			if(currentNode.value === pathEndPoint.value) {
				return translatePathNodesIntoCoordinates(currentNode)
			}
			//if the current node is not the destination
			else {
				//get neighboring nodes that are valid
				nodeNeighbors = checkNeighbors(grid,currentNode.x, currentNode.y)
				//iterate through them
				for(var i = 0; i < nodeNeighbors.length; i++) {
					//potential path nodes
					pathNode = createNode(grid,currentNode,nodeNeighbors[i]);
					//checks to see if pathNode has been checked yet
					if(!uniqueCoordinateValueArray[pathNode.value]) {
						pathNode.distanceCost = pathNode.distanceCost + distanceFunction(nodeNeighbors[i], currentNode);
						pathNode.heurisiticCost = pathNode.distanceCost + distanceFunction(nodeNeighbors[i], pathEndPoint);
						nodesToBeChecked.push(pathNode);
						//sets the node to true which repsents it has beenc hecked
						uniqueCoordinateValueArray[pathNode.value] = true;
					}
				}
				checkedNodes.push(currentNode)
				return calculatePathNodes()
			}
		}
	}
	return calculatePathNodes()
} 



var testGrid = 
[[0,0,0,0],
 [1,0,1,0],
 [1,0,1,0],
 [0,0,0,0]]

var testGrid2 = 
[[1,0,0],
 [0,0,1],
 [1,1,1]]
 
var testGrid3 = 
[[0,0],
 [0,0]]


// console.log(findPath(testGrid3,[0,0],[1,1]))
