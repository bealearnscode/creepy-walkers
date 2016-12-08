import graphicsSystem from './system/graphics';
import inputSystem from './system/input';
import badguy from './entity/badguy';
import tower from './entity/tower';
import level from './entity/level';

export default function game() {

	var entities = [level(),badguy(), tower()];
	var canvas = document.getElementById("canvas");
	var graphics = graphicsSystem(entities, canvas);
	var input = inputSystem(entities, canvas);

	function run() {
		console.log("test");
		graphics.run();
		input.run();
	}

	return Object.freeze ({
		run: run,
	});
	
}