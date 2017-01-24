export default function userFeedback(spec) {
	var status = "playing";

	function changeStatus() {
		status = "You Lose";
	}

	function getStatus() {
		return status;
	}

	return Object.freeze ({
		changeStatus: changeStatus,
		getStatus: getStatus,
	});
}