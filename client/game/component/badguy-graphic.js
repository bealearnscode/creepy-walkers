export default function badGuyGraphicComponent(spec) {

	//TODO: add in appropriate sprite

	console.log("Creating bad guy graphic");
	var coin = new Image();
	coin.src = spec.coin
	function drawBadGuy(ctx, path) {
	for(var i = 0;i<path.length;i++) {
			ctx.drawImage(coin,0,0,8,8,path[i].x*32,path[i].y*32,8,8)
		}		
	}

	return Object.freeze ({
		drawBadGuy: drawBadGuy,
	});

}
