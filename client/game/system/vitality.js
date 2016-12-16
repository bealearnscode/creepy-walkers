import userEntity from '../entity/user';

export default function vitalitySystem(entities) {

	function run() {
		setInterval(die,1000/4);
	}

	function die() {
		entities.forEach(function(entity, index) {
			if(entity.getComponentKeys().includes("health")) {
				if(entity.getHealth() <= 0) {
					entity.playAudio();
					entities.splice(index, 1);
					entities.forEach(function(entity,index) {
						if(entity.getComponentKeys().includes("money")) {
							entity.updateMoney(3)
							entity.updateScore(15)
						}
					})
				}
				if(entity.checkStatus() === true) {
					entities.splice(entities.indexOf(entity),1)
					entities.forEach(function(userEntity,index) {
						if(userEntity.getComponentKeys().includes("money")) {
							userEntity.updateLives(1)
							if(userEntity.getLives() === 0) {
								entities.forEach(function(entity,index) {
									if(entity.getComponentKeys().includes("map") || entity.getComponentKeys().includes("collision")) {
										entities.splice(entity,1);
									}
								})
							} 
						}
					})
				}
			}
		});	
	};

	

	return Object.freeze({
		run: run,
		die: die,
	})
}