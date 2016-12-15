export default function madeIt() {
	var madeIt = false;

	function pathFinished() {
		madeIt = true;
	}

	function checkStatus() {
		return madeIt;
	}

	return Object.freeze ({
		pathFinished: pathFinished,
		checkStatus: checkStatus,
	})
}