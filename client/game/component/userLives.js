export default function userLives(spec) {
	var lives = spec.amount

	function getLives() {
		return lives;
	}

	function updateLives(amount) {
		return lives -= amount;
	}

	return Object.freeze ({
		getLives: getLives,
		updateLives: updateLives,
	})
}