export default function makePasswordManager(spec) {
	var password = spec.password;
	var username = spec.username;

	var passwordInterface = {};

	passwordInterface.generateAuthenticationHeader = function() {
		return "Basic " + btoa(username + ":" + password);
	};

	return Object.freeze(passwordInterface);
}