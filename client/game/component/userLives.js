export default function userLives(spec) {
	var lives = {
		amount: spec.amount,
	}

	function getLives() {
		return lives.amount;
	}

	function updateLives(amount) {
		return lives.amount += amount;
	}

	return Object.freeze ({
		getLives: getLives,
		updateLives: updateLives,
	})
}