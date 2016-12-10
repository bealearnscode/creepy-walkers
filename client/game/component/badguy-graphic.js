export default function badGuyGraphicComponent(spec) {

	var whiteWalkerLeft = new Image();
	whiteWalkerLeft.src = spec.whiteWalkerLeft;

	var whiteWalkerRight = new Image();
	whiteWalkerRight.src = spec.whiteWalkerRight;
	
	var currentWhiteWalkerImage = whiteWalkerRight

	function drawBadGuy(ctx) {
		//for testing path aggragately
		// for(var i = 0; i < path.length; i++) {
		// 	//ctx.drawImage(whiteWalker, 0, 0, 16, 16, path[i].x, path[i].y, 1, 1);
		// }
		var currentRowDelta = spec.movement.moveBadGuy().rowDelta
		var creepX = spec.movement.moveBadGuy().x;
		var creepY = spec.movement.moveBadGuy().y;
		
		if(currentRowDelta > 0 ) {
			currentWhiteWalkerImage = whiteWalkerRight		
		}
		if(currentRowDelta < 0) {
			currentWhiteWalkerImage = whiteWalkerLeft
		}
		ctx.drawImage(currentWhiteWalkerImage, 0, 0, 16, 16, creepX, creepY, 1, 1);

	}
	return Object.freeze ({
		drawBadGuy: drawBadGuy,
	});
}
