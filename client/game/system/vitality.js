import makeBadguy from '../entity/badguy';

export default function vitalitySystem(entities) {

	var creepCounter = 0;
	var creepDeath = 0
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
				if(creepCounter === 5) {
				clearInterval(currentWave);
				}
		},1000);
	};

	function die() {
		
		entities.forEach(function(entity, index) {
			if(entity.getComponentKeys().includes("health")) {
				if(entity.getHealth() <= 0) {
					creepDeath += 1
					entities.splice(index, 1);
				}
			}
		});
		if(creepDeath == creepCounter) {
			console.log('goodjob')
			window.setTimeout(cleanProjectiles(),250)			
		}
	};

	function cleanProjectiles() {
		entities.forEach(function(entity,index) {
			if(entity.getComponentKeys().includes("projectileLocation")) {
				entities.splice(entities.indexOf(entity),1)
			}
		})	
	}

	return Object.freeze({
		run:run,
		wave:wave,
		die: die,
	});
}