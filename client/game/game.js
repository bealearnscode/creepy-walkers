import graphicsSystem from './system/graphics';
import inputSystem from './system/input';
import movementSystem from './system/movement';
import waveSystem from './system/wave';
import badguy from './entity/badguy';
import tower from './entity/tower';
import level from './entity/level';

export default function game() {

	var entities = [level(), tower()];
	var canvas = document.getElementById("canvas");
	var graphics = graphicsSystem(entities, canvas);
	var input = inputSystem(entities, canvas);
	var movement = movementSystem(entities);
	var wave = waveSystem(entities)

	function run() {
		graphics.run();
		input.run();
		movement.run();
		wave.run();
	}

	return Object.freeze ({
		run: run,
	});
	
}