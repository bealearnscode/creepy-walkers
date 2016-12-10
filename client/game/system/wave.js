import badguy from '../entity/badguy'

export default function waveSystem(entities) {

	var creepCounter = 0

	function run() {
		wave()
	}

	//possible put wave information in as parameters for this function
	function generateCreep() {
		entities.push(badguy())
	}

	function wave() {
		setInterval(generateCreep(),1000)
		creepCounter++
		console.log(creepCounter)
		if(creepCounter == 30) {
			return 
		}
	}

	return Object.freeze({
		run:run,
		wave:wave,
	})
}
