var fetch = require("isomorphic-fetch");

export const IS_GAME_STARTED = 'IS_GAME_STARTED';
export function isGameStarted(bool) {
    return {
        type: IS_GAME_STARTED,
        payload: bool,
    };
}

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export function signInSuccess(user) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user,
    };
}

export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export function signInError(err) {
    return {
        type: SIGN_IN_ERROR,
        payload: err,
    };
}

export function signInAsync(username, password) {
	return function(dispatch) {
		let endpoint = "/users";
		return fetch(endpoint, {
			method: "GET",
			headers: {
				"Authorization": "Basic " + btoa(username + ":" + password),
	        	// "Content-Type": "application/x-www-form-urlencoded",
	        	// "Access-Control-Allow-Origin": "*",
	        	// "Accept": "application/json",
	        	// "Content-Type": "application/json"
			},
			// body: JSON.stringify({
	  //           username: username,
	  //           password: password
	  //       })
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
			//return dispatch(signInSuccess(data));
		})
		.catch(error => {
			console.log(error);
			//return dispatch(signInError(error));
		})
	}
}

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export function registerUserSuccess() {
	return {
		type: REGISTER_USER_SUCCESS,
	}
}

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export function registerUserError(err) {
	return{
        type: REGISTER_USER_ERROR,
        error: err,
    }
}

export function registerUserAsync(username, password) {
	return function(dispatch) {
		let endpoint = "/users";
		return fetch(endpoint, {
			method: "POST",
			headers: {
	        	"Accept": "application/json",
	        	"Content-Type": "application/json"
			},
			body: JSON.stringify({
	            username: username,
	            password: password
	        })
		})
		.then(response => {
			if (response.status < 200 || response.status >= 300) {
				let error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
			return response.json();
		})
		.then(() => {
			return dispatch(registerUserSuccess());
		})
		.catch(error => {
			console.log(error);
			return dispatch(registerUserError(error));
		})
	}
}

export const DESTROY_SESSION = 'DESTROY_SESSION';
export function destroySession() {
	return {
		type: DESTROY_SESSION,
	}
}