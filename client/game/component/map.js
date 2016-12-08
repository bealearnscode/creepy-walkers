export default function mapComponent(spec) {

	var currentLocation = {
		x: spec.x,
		y: spec.y,
	};

	function getXLocation() {
		return currentLocation.x;
	}

	function getYLocation() {
		return currentLocation.y;
	}

	return Object.freeze({
		getXLocation: getXLocation,
		getYLocation: getYLocation,
	});

}