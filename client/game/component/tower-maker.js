export default function towerGraphicComponent(spec) {

	var entity = spec.entityOfComponent;
	var spriteSheet = new Image();
	spriteSheet.src = spec.spriteSheet;

	function drawTower(ctx, x, y) {
		ctx.save();
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(spriteSheet, 0, 0, 16, 16, x, y, 1, 1);
		ctx.restore();
	}

	return Object.freeze ({
		drawTower: drawTower,
	});

}