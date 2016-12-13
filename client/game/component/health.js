//health component for badguys
export default function badGuyHealthComponent(spec) {

	var health = {
		amount: spec.amount,
	}

	function getHealth() {
		return health.amount;
	}

	return Object.freeze ({
		getHealth: getHealth,
	});

}
