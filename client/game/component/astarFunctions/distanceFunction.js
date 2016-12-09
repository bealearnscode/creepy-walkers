//how we calculate distance in moves
//Manhattan distance is only measuring linear movement, no diagonals
module.exports =  function(Point, Goal) {
		return Math.abs(Point.x - Goal.x) + Math.abs(Point.y - Goal.y);
}

