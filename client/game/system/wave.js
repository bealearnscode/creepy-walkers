import makeBadguy from '../entity/badguy'

export default function waveSystem(entities) {

	var creepCounter = 0

	function run() {
		wave()
	}

	//possible put wave information in as parameters for this function
	function generateCreep() {
		var currentCreep = makeBadguy()
		creepCounter += 1
		console.log(creepCounter)
		entities.push(currentCreep)
	}

	function wave() {
		var currentWave = window.setInterval(generateCreep,1000)
		if(creepCounter === 30) {
			console.log('made it inside clear condition')
			clearInterval(currentWave)
		}
	}

	return Object.freeze({
		run:run,
		wave:wave,
	})
}
