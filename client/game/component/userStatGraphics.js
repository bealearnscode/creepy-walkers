export default function UserStatGraphics(spec) {
	var entity = spec.entity
	console.log(entity)
	var userScore = entity.getScore();
	var userMoney = entity.getMoney();
	var userLives = entity.getLives();

	function drawStats(ctx) {
		console.log(1)
		ctx.fillStyle = "rgb(250, 250, 250)";
	    ctx.font = "24px Helvetica";
	    ctx.textAlign = "left";
	    ctx.textBaseline = "top";
	    ctx.fillText("UserLives:" + userLives, 1, 1);
	}

	return Object.freeze ({
		drawStats: drawStats,
	})
}