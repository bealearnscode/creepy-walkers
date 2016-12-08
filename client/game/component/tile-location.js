export default function tileLocationComponent(spec) {

	var currentTileLocation = {
		x: Math.floor(spec.x),
		y: Math.floor(spec.y),
	};

	function getXLocation() {
		return currentTileLocation.x;
	}

	function getYLocation() {
		return currentTileLocation.y;
	}

	return Object.freeze({
		getXLocation: getXLocation,
		getYLocation: getYLocation,
	});

}