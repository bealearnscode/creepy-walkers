export default function userMoney(spec) {
	var money = {
		amount: spec.amount,
	}

	function getMoney() {
		return money.amount;
	}

	function updateMoney(amount) {
		return money.amount += amount;
	}

	return Object.freeze ({
		getMoney: getMoney,
		updateMoney: updateMoney,
	})
}