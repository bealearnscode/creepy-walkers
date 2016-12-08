//this is where I load the grass and dirt
export default function makeLevelGraphicComponent(spec) {
	console.log('makin the land.. like god')

	var entity = spec.entityOfComponent;
	var dirt = new Image()
	dirt.src = spec.dirt;
	var grass = new Image()
	grass.src = spec.grass;

	function drawMap(ctx,map) {
		for(var y = 0;y<(map.dimensions);y++) {
		for(var x = 0; x<(map.dimensions);x++) {
			switch(map.layout[x][y]) {
				case 0:
					ctx.drawImage(dirt,0,0,tileWidth,tileHeight,y*tileWidth,x*tileHeight,tileWidth,tileHeight)	
					break;
				case 1:
					ctx.drawImage(grass,0,0,tileWidth,tileHeight,y*tileWidth,x*tileHeight,tileWidth,tileHeight)
					break;
			}
		}
	}
	
	return Object.freeze ({
		drawMap: drawMap,
	})
}