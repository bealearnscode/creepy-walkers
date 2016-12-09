export default function badGuyGraphicComponent(spec) {

	console.log("Creating whiteWalker");
	var whiteWalker = new Image();
	whiteWalker.src = spec.whiteWalker;

	function drawBadGuy(ctx, path) {
	for(var i = 0; i < path.length; i++) {
			ctx.drawImage(whiteWalker, 0, 0, 16, 16, path[i].x, path[i].y, 1, 1);
		}		
	}

	return Object.freeze ({
		drawBadGuy: drawBadGuy,
	});

}
