import makeBadGuyGraphicComponent from '../component/badguy-graphic';

export default function makeBadGuy() {

	console.log("Creating bad guy entity");
	var badguy = {};
	var graphics = makeBadGuyGraphicComponent(badguy);
	var location = {x: 100, y: 100};

	var components = {
		graphics: graphics,
		location: location,
	};

	badguy.getXLocation = function() {
		return components.location.x;
	};

	badguy.getYLocation = function() {
		return components.location.y;
	};

	badguy.getComponentKeys = function() {
		return Object.keys(components);
	};

	badguy.draw = function(ctx) {
		components.graphics.drawBadGuy(ctx);
	};

	return Object.freeze(badguy);
	
}