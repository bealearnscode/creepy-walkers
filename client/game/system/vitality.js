import makeBadguy from '../entity/badguy';

export default function vitalitySystem(entities) {

	var creepCounter = 0;

	function run() {
		wave();
		setInterval(die, 1000/4);
	}

	//possible put wave information in as parameters for this function

	function wave() {
		var currentWave = window.setInterval(
			function generateCreep() {
				var currentCreep = makeBadguy();
				creepCounter += 1;
				//console.log(creepCounter);
				entities.push(currentCreep);
				if(creepCounter === 1) {
					clearInterval(currentWave);
				}
		},1000);
	}

	function die() {
		entities.forEach(function(entity, index) {
			if(entity.getComponentKeys().includes("health")) {
				if(entity.getHealth() <= 0) {
					entities.splice(index, 1);
					//console.log("after splice", entities);
					//console.log("index", index);
				}
			}
		});
	}

	return Object.freeze({
		run:run,
		wave:wave,
		die: die,
	});
}