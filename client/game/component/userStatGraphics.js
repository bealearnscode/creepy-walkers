export default function UserStatGraphics(spec) {
	var entity = spec.entity
	console.log(entity)
	function drawStats(ctx) {
		if(entity.getStatus() == "playing") {
			var lives  = spec.entity.getLives();
			var money = spec.entity.getMoney();
			var score = spec.entity.getScore();
			var wave = spec.entity.getWave();
			ctx.fillStyle = "black";
		    ctx.font = ".3px Helvetica";
		    ctx.fillText("Current Wave: " + wave + " Lives: " + lives + "   Money: " + money + "   Score: " + score , 8, .25);
		}
		if(entity.getStatus() == "You Lose") {
			ctx.fillstyle = "white";
			ctx.font = "5px Helvetica";
			ctx.fillText("L", 6,9)
		}
		
	}

	return Object.freeze ({
		drawStats: drawStats,
	})
}