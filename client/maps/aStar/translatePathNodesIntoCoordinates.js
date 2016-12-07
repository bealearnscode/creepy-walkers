//translate pathnodes into coordinate pairs in an array
var pathCoordinateArray = []
function translatePathNodesIntoCoordinates(pathNode) {
	if(pathNode === null) {
			return pathCoordinateArray.reverse()
		}
		pathCoordinateArray.push([pathNode.x,pathNode.y])
		return translatePathNodesIntoCoordinates(pathNode.Parent)
}

module.exports = translatePathNodesIntoCoordinates