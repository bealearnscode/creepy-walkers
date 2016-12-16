export default function waves(spec) {
	var wave = {
		currentWave: 1,
	};

	function getWave() {
		return wave.currentWave;
	}

	function updateWave() {
		return wave.currentWave += 1;
	}

	return Object.freeze ({
		getWave: getWave,
		updateWave: updateWave,
	})
}