export default function UserStatGraphics(spec) {
	

	function drawStats(ctx) {
		var lives  = spec.entity.getLives();
		var money = spec.entity.getMoney();
		var score = spec.entity.getScore();
		ctx.fillStyle = "white";
	    ctx.font = ".3px Helvetica";
	    ctx.fillText("Lives: " + lives + "   Money: " + money + "   Score: " + score , 11, .25);
	}

	return Object.freeze ({
		drawStats: drawStats,
	})
}