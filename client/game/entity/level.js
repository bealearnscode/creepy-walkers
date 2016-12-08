export default function makeLevel() {

	console.log("making levels, ya'll");
	var level = {};
	//var graphics = makeLevelGraphicComponent(level);

	var components = {};

	level.getComponentKeys = function() {
		return Object.keys(components);
	};


	return Object.freeze(level);
	
}