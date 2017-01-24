export default function towerGraphicComponent(spec) {
	var entity = spec.entityOfComponent;
	var spriteSheet = new Image();
	spriteSheet.src = spec.spriteSheet;

	function drawTower(ctx) {
		ctx.save();
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(spriteSheet, 0, 0, 16, 16, entity.getXLocation(), entity.getYLocation(), 1, 1);
		ctx.restore();

		//Draw the green radius
		ctx.beginPath();
		ctx.arc(entity.getXLocation() + 0.5, entity.getYLocation() + 0.5, 2, 0, Math.PI * 2);
		ctx.fillStyle = 'rgba(0, 200, 0, 0.2)';
		ctx.fill();
		ctx.closePath();
	}

	return Object.freeze ({
		drawTower: drawTower,
	});
}