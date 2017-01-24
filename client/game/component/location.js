export default function locationComponent(spec) {
	var currentLocation = {
		x: spec.x,
		y: spec.y,
		direction: 'right',
	};

	function changeXLocation(delta) {
		currentLocation.x = currentLocation.x + delta;
		if(delta > 0) {
			currentLocation.direction = 'right';
		}
		if(delta < 0) {
			currentLocation.direction = 'left';
		}
	}

	function changeYLocation(delta) {
		currentLocation.y =  currentLocation.y + delta;
	}

	function getXLocation() {
		return currentLocation.x;
	}

	function getYLocation() {
		return currentLocation.y;
	}

	function getDirection() {
		return currentLocation.direction;
	}

	return Object.freeze({
		getXLocation: getXLocation,
		getYLocation: getYLocation,
		changeXLocation: changeXLocation,
		changeYLocation: changeYLocation,
		getDirection: getDirection,
	});
}