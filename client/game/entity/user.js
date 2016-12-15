import userMoney from '../component/userMoney';
import userLives from '../component/userLives';
import userScore from '../component/userScore';
import userStatGraphics from '../component/userStatGraphics';

export default function userState() {
	var user = {};

	var lives =  userLives({
		amount: 10,
	});

	var money = userMoney({
		amount: 100,
	});

	var score = userScore({
		amount: 0,
	});

	var graphics = userStatGraphics({
		entity:user
	});

	var components = {
		money: money,
		lives: lives,
		score: score,
		graphics: graphics,
	};

	user.getLives = function() {
		return components.lives.getLives();
	};

	user.getMoney = function() {
		return components.money.getMoney();
	};

	user.getScore = function() {
		return components.score.getScore();
	};

	user.updateLives = function(amount) {
		components.lives.updateLives(amount);
	};

	user.updateMoney = function(amount) {
		components.money.updateMoney(amount);
	};

	user.updateScore = function(amount) {
		components.score.updateScore(amount);
	};

	user.draw = function(ctx) {
		components.graphics.drawStats(ctx);
	};

	user.getComponentKeys = function() {
		return Object.keys(components);
	};

	return Object.freeze(user);
}