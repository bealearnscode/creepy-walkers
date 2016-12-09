export default function badGuyGraphicComponent(spec) {

	console.log("Creating whiteWalker");
	var whiteWalker = new Image();
	whiteWalker.src = spec.whiteWalker;

	function drawBadGuy(ctx, path) {
	for(var i = 0; i < path.length; i++) {
			ctx.drawImage(whiteWalker, 0, 0, 16, 16, path[i].x * 32, path[i].y * 32, 16, 16);
		}		
	}

	return Object.freeze ({
		drawBadGuy: drawBadGuy,
	});

}
