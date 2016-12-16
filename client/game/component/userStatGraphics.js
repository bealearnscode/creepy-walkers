export default function UserStatGraphics(spec) {
	

	function drawStats(ctx) {
		var lives  = spec.entity.getLives();
		var money = spec.entity.getMoney();
		var score = spec.entity.getScore();
		var wave = spec.entity.getWave();
		ctx.fillStyle = "black";
	    ctx.font = ".3px Helvetica";
	    ctx.fillText("Current Wave: " + wave + " Lives: " + lives + "   Money: " + money + "   Score: " + score , 8, .25);
	}

	return Object.freeze ({
		drawStats: drawStats,
	})
}