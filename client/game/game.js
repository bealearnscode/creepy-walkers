import graphicsSystem from './system/graphics';
import inputSystem from './system/input';
import movementSystem from './system/movement';
import vitalitySystem from './system/vitality';
import collisionSystem from './system/collision';
import badguy from './entity/badguy';
import tower from './entity/tower';
import level from './entity/level';
import user from './entity/user';
//tower and badguy are being created dynamically

export default function game() {
  	console.log(user())
	var entities = [level(),user()];
	var canvas = document.getElementById("canvas");
	var graphics = graphicsSystem(entities, canvas);
	var input = inputSystem(entities, canvas);
	var movement = movementSystem(entities);
	var vitality = vitalitySystem(entities)
	var collision = collisionSystem(entities);

	function run() {
		graphics.run();
		input.run();
		movement.run();
		vitality.run();
		collision.run();
	}

	return Object.freeze ({
		run: run,
	});
	
}