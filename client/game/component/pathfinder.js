import distanceFunction from './astarFunctions/distanceFunction';
import isValidForPath from './astarFunctions/isValidForPath';
import checkNeighbors from './astarFunctions/checkNeighbors';
import createNode from './astarFunctions/createNode';
import translatePathNodesIntoCoordinates from './astarFunctions/translatePathNodesIntoCoordinates';
import createRandomGrid from './astarFunctions/createRandomGrid';

//this component needs to know about what the current map is
export default function pathfinder(spec) {
	//map layout variables
	var mapLayout = spec.layout;
	var mapDimensions = spec.dimensions;
	console.log(mapDimensions)
	var startingPoint = spec.startingPoint;
	var endPoint = spec.endPoint;
	var mapSize = mapLayout.length * mapDimensions;

	//a* variables
	var uniqueCoordinateValueArray = new Array(mapSize)
	var startingNode = createNode(mapDimensions, null, startingPoint)
	var endingNode = createNode(mapDimensions, null, endPoint)
	console.log(startingNode)
	console.log(endingNode)
	var nodesToBeChecked = [startingNode]
	var checkedNodes = [];
	var nodeNeighbors;
	var currentNode;
	var pathNode;
	var lowHeuristicIndex = 0;
	var largestHeuristic = mapSize
	var pathCoordinateArray = []

	function calculatePathNodes() {
		if(isValidForPath(mapLayout,startingPoint.x,startingPoint.y) == 1) {
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
			console.log(nodeNeighbors)
			console.log(currentNode)
			//checks to see if the current node is the destination node
			if(currentNode.value === endingNode.value) {
				return translatePathNodesIntoCoordinates(currentNode)
			}
			//if the current node is not the destination
			else {
				//get neighboring nodes that are valid
				nodeNeighbors = checkNeighbors(mapLayout,currentNode.x, currentNode.y)
				//iterate through them
				for(var i = 0; i < nodeNeighbors.length; i++) {
					//potential path nodes
					pathNode = createNode(mapDimensions,currentNode,nodeNeighbors[i]);
					//checks to see if pathNode has been checked yet
					if(!uniqueCoordinateValueArray[pathNode.value]) {
						pathNode.distanceCost = pathNode.distanceCost + distanceFunction(nodeNeighbors[i], currentNode);
						pathNode.heurisiticCost = pathNode.distanceCost + distanceFunction(nodeNeighbors[i], endPoint);
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


	return Object.freeze ({
		path: calculatePathNodes,
	})	
}