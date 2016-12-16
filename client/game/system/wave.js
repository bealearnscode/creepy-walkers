import makeBadguy from '../entity/badguy';

export default function waveSystem(entities) {
	var waveStart = false
	var creepsGenerating = false
	var creepCounter = 0;
	var waveTotal = 10;
	var waveHealthBoost = 1;
	var gameOver = false
	function run() {
		var waveLoop = setInterval(wave,1000)
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
					var currentCreep = makeBadguy(waveHealthBoost);
					creepCounter += 1;
					entities.push(currentCreep);
					if(creepCounter === waveTotal){
						creepsGenerating = false;
						clearInterval(currentWave);
					}
			},1000);
		}
	};

	function isWaveComplete() {
		var currentCreeps = []
		entities.forEach(function(entity,index) {
			if(entity.getComponentKeys().includes("health")) {
				currentCreeps.push(entity)
			}
		})
		entities.forEach(function(entity,index){
			if(entity.getComponentKeys().includes("money")) {
				if(entity.getLives() === 0) {
						gameOver = true;
						entity.changeStatus()
				}
			}
		}) 
		if(currentCreeps.length === 0 && creepsGenerating == false) {
			if(gameOver) {
				clearInterval(waveChecker)
				clearInterval(waveLoop)
			};
			var victorySound = document.getElementById("victory_wave");
			victorySound.play()
			cleanProjectiles()
			entities.forEach(function(entity,index) {
				if(entity.getComponentKeys().includes("money")) {
					entity.updateScore(50*waveTotal);
					entity.updateScore(33*entity.getMoney())
					entity.updateMoney(3*waveTotal);
					entity.updateWave();
					waveHealthBoost += entity.getWave() * 1.5;
					waveTotal += 5
					waveStart = false;
					cleanProjectiles()
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