import userMoney from '../component/userMoney';
import userLives from '../component/userLives';
import userScore from '../component/userScore';
import userStatGraphics from '../component/userStatGraphics';

export default function userState() {
	var user = {};

	var lives =  userLives({
		entity: user,
		amount: 30
	});

	var money = userMoney({
		entity: user,
		amount: 100
	});

	var graphics = userStatGraphics({
		entity: user,
	});

	var score = userScore({
		entity:user,
	});

	var components = {
		money: money,
		lives: lives,
		score: score,
		graphics: graphics,
	};

	user.updateLives = function(amount) {
		return components.lives.updateLives(amount);
	};

	user.getLives = function() {
		return components.lives.getLives();
	};

	user.updateMoney = function(amount) {
		return components.money.updateMoney(amount);
	};

	user.getMoney = function() {
		return components.money.getMoney();
	};

	user.getScore = function() {
		return components.score.getScore();
	};

	user.updateScore = function(amount) {
		return components.score.updateScore(amount);
	};

	user.draw = function(ctx) {
		console.log(2)
		components.graphics.drawStats(ctx);
	};

	return Object.freeze(user);
}