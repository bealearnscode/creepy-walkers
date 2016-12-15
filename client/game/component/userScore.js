export default function userScore(spec) {
	var score = {
		amount: 0,
	}

	function getScore() {
		return score.amount;
	}

	function updateScore(amount) {
		return score.amount += amount;
	}

	return Object.freeze ({
		getScore: getScore,
		updateScore: updateScore,
	})
}