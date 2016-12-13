//make a method to lower amount of health
//when health <= 0, they dead. lata.
export default function badGuyHealthComponent(spec) {

	var health = {
		amount: spec.amount,
	}

	function getHealth() {
		return health.amount;
	}

	function reduceHealth(damage) {
		return health.amount -= damage;
	}

	return Object.freeze ({
		getHealth: getHealth,
		reduceHealth: reduceHealth,
	});

}
