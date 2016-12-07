export default function badGuyGraphicComponent(entity) {

	//TODO: add in appropriate sprite

	console.log("Creating bad guy graphic");
	var badguy = entity;

	function drawBadGuy(ctx) {
		ctx.beginPath();
		ctx.arc(badguy.getXLocation(), badguy.getYLocation(), 16, 0, Math.PI * 2);
		ctx.fillStyle = "#ef4426";
		ctx.fill();
		ctx.closePath();
	}

	return Object.freeze ({
		drawBadGuy: drawBadGuy,
	});

}