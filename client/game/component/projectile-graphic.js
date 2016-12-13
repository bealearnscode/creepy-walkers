export default function projectileGraphicComponent(spec) {

	var entity = spec.entity;
	var projectile = new Image();
	projectile.src = spec.projectile;

	function drawProjectile(ctx) {
		ctx.save();
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(projectile, 0, 0, 8, 8, entity.getXLocation(), entity.getYLocation(), 0.25, 0.25);
		ctx.restore();
	}

	return Object.freeze({
		drawProjectile: drawProjectile,
	});

}