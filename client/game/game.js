import graphicsSystem from './system/graphics';
import badguy from './entity/badguy';

export default function game() {

	var entities = [badguy()];
	var canvas = document.getElementById("canvas");
	var graphics = graphicsSystem(entities, canvas);

	function run() {
		console.log("test");
		graphics.run();
	}

	return Object.freeze ({
		run: run,
	});
	
}