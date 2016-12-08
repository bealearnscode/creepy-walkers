import graphicsSystem from './system/graphics';
import inputSystem from './system/input';
import badguy from './entity/badguy';

export default function game() {

	var entities = [badguy()];
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