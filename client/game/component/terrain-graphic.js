export default function makeLevelGraphicComponent(spec) {

	var dirt = new Image()
	dirt.src = spec.dirt;
	var grass = new Image()
	grass.src = spec.grass;
	var tileWidth = 32;
	var tileHeight = 32;

	function drawMap(ctx,map) {
		ctx.imageSmoothingEnabled = false;
		for(var y = 0;y<map.dimensions;y++) {
			for(var x = 0; x<map.dimensions;x++) {
				switch(map.layout[x][y]) {
					case 0:
						ctx.drawImage(dirt,0,0,tileWidth,tileHeight,y,x,1,1);
						break;
					case 1:
						ctx.drawImage(grass,0,0,tileWidth,tileHeight,y,x,1,1);
						break;
				}
			}
		}
	}
	
	return Object.freeze ({
		drawMap: drawMap,
	});
}