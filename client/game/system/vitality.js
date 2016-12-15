import makeBadguy from '../entity/badguy';

export default function vitalitySystem(entities) {

	var creepCounter = 0;
	var creepDeath = 0
	var waveEnd = false

	function run() {
		if(waveEnd === false) {
			window.setTimeout(wave(),5000);
			setInterval(die, 1000/4);	
		}
		
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
					entities.forEach(function(entity,index) {
						if(entity.getComponentKeys().includes("money")) {
							entity.updateMoney(5)
						}
					})
				}
			}
		});
		if(creepDeath == creepCounter) {
			window.setTimeout(cleanProjectiles(),250)
			entities.forEach(function(entity,index) {
				if(entity.getComponentKeys().includes("money")) {
					waveEnd = true
					entity.updateScore(50*creepDeath);
					entity.updateMoney(15*creepDeath);
					window.setTimeout(resetWave(), 200);
				}
			})			
		}
	};

	function cleanProjectiles() {
		entities.forEach(function(entity,index) {
			if(entity.getComponentKeys().includes("projectileLocation")) {
				entities.splice(entities.indexOf(entity),1)
			}
		})	
	};

	function resetWave() {
		creepDeath = 0;
		creepCounter = 0;
		waveEnd = false
	}

	return Object.freeze({
		run:run,
		wave:wave,
		die: die,
	});
}