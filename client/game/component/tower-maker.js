export default function towerGraphicComponent(spec) {

	var entity = spec.entityOfComponent;
	var spriteSheet = new Image();
	spriteSheet.src = spec.spriteSheet;

	function drawTower(ctx, x, y) {
		ctx.imageSmoothingEnabled = false;
		ctx.beginPath();
		ctx.rect(x, y, 64, 64);
		ctx.stroke();
		ctx.closePath();
		ctx.drawImage(spriteSheet, 0, 0, 16, 16, x, y, 64, 64);
	}

	return Object.freeze ({
		drawTower: drawTower,
	});

}