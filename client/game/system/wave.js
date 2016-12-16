import makeBadguy from '../entity/badguy';

export default function waveSystem(entities) {
	var waveStart = false
	var creepsGenerating = false
	var creepCounter = 0;
	var waveTotal = 10;
	function run() {
		setInterval(wave,1000)
		var waveChecker = setInterval(isWaveComplete, 2000);
	}

	//possible put wave information in as parameters for this function

	function wave() {
		if(!waveStart) {
			creepCounter = 0;
			waveStart = true;
			creepsGenerating = true;
			var currentWave = window.setInterval(
				function generateCreep() {
					var currentCreep = makeBadguy();
					creepCounter += 1;
					//console.log(creepCounter);
					entities.push(currentCreep);
					if(creepCounter === waveTotal){
						creepsGenerating = false;
						clearInterval(currentWave);
						waveTotal += 5;
						console.log(waveTotal)
					}
			},1000);
		}
	};

	function isWaveComplete() {
		var currentCreeps = []
		console.log('currentcreeps',currentCreeps)
		entities.forEach(function(entity,index) {
			if(entity.getComponentKeys().includes("health")) {
				currentCreeps.push(entity)
			}
		})
		if(currentCreeps.length === 0 && creepsGenerating == false) {
			console.log('hello')
			cleanProjectiles()
			entities.forEach(function(entity,index) {
				if(entity.getComponentKeys().includes("money")) {
					entity.updateScore(50*waveTotal);
					entity.updateScore(33*entity.getMoney())
					entity.updateMoney(15*waveTotal);
					waveTotal += 5
					waveStart = false;
				}
			})
		}	
	}

	function cleanProjectiles() {
		entities.forEach(function(entity,index) {
			if(entity.getComponentKeys().includes("projectileLocation")) {
				entities.splice(entities.indexOf(entity),1)
			}
		})	
	};

	return Object.freeze({
		run:run,
		wave:wave,
	});
}