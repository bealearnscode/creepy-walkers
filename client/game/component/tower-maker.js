export default function towerGraphicComponent(spec) {

	var entity = spec.entityOfComponent;
	var spriteSheet = new Image();
	spriteSheet.src = spec.spriteSheet;

	function drawTower(ctx, x, y) {
		ctx.save();
		ctx.imageSmoothingEnabled = false;
		ctx.beginPath();
		ctx.rect(x, y, 4, 4);
		ctx.stroke();
		ctx.closePath();
		ctx.drawImage(spriteSheet, 0, 0, 16, 16, x, y, 4, 4);
		ctx.restore();
	}

	return Object.freeze ({
		drawTower: drawTower,
	});

}