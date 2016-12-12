export default function badGuyGraphicComponent(spec) {

	var whiteWalker = new Image();
	whiteWalker.src = spec.whiteWalker;
	var creepX = spec.movement.moveBadGuy().x;
	var creepY = spec.movement.moveBadGuy().y;

	function drawBadGuy(ctx) {
		// for(var i = 0; i < path.length; i++) {
		// 	//ctx.drawImage(whiteWalker, 0, 0, 16, 16, path[i].x, path[i].y, 1, 1);
		// }

		ctx.save();
		//ctx.setTransform(1,0,0,1,0,0);
		//not sure why, but x and y are flipped here
		//only spot where this happens
		//ctx.translate((creepY),(creepX));
		//console.log("we're drawing");
		ctx.drawImage(whiteWalker, 0, 0, 16, 16, creepX, creepY, 1, 1);
		ctx.restore();
	}

	return Object.freeze ({
		drawBadGuy: drawBadGuy,
	});

}
