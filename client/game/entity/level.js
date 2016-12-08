import makeLevelMapComponent from '../component/map';
import makeLevelGraphicComponent from '../component/terrain-graphic';

export default function makeLevel() {

	console.log("making levels, ya'll");
	var level = {};
	var graphics = makeLevelGraphicComponent({
		entityOfComponent: level,
		dirt: 'assets/img/maptiles/dirt-noborder.png';
		grass: 'assets/img/maptiles/grass-noborder.png';
	});

	var components = {
		graphics: graphics,
	};

	level.getMap = function() {
		return makeLevelMapComponent.map
	}

	level.getComponentKeys = function() {
		return Object.keys(components);
	};

	level.draw = function(ctx,map) {
		components.graphics.drawMap(ctx,level.getMap())
	}

	return Object.freeze(level);
	
}