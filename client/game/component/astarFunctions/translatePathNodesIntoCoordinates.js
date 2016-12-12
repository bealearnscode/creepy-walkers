//translate pathnodes into coordinate pairs in an array
var pathCoordinateArray = []
function translatePathNodesIntoCoordinates(pathNode) {
	if(pathNode === null) {
			return pathCoordinateArray.reverse()
		}
		pathCoordinateArray.push({x:pathNode.y, y:pathNode.x})
		return translatePathNodesIntoCoordinates(pathNode.Parent)
}

module.exports = translatePathNodesIntoCoordinates