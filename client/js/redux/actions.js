import fetch from 'isomorphic-fetch';

export const IS_GAME_STARTED = 'IS_GAME_STARTED';
export function isGameStarted(bool) {
    return {
        type: IS_GAME_STARTED,
        payload: bool,
    };
}

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export function signInSuccess(data) {
    return {
        type: SIGN_IN_SUCCESS,
        payloadUser: data.username,
        payloadPass: data.password,
    };
}

export const SIGN_IN_ERROR = "SIGN_IN_ERROR";
export function signInError(err) {
    return {
        type: SIGN_IN_ERROR,
        payload: err,
    };
}

export function loginAsync(username, password) {
	return function(dispatch) {
		let endpoint = "/users/" + username;
		return fetch(endpoint, {
			method: "GET",
			headers: {
				"Authorization": "Basic " + btoa(username + ":" + password)
			}
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
			return dispatch(signInSuccess(data));
		})
		.catch(error => {
			return dispatch(signInError(error));
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
        payload: err,
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

export const FETCH_HIGH_SCORES_SUCCESS = "FETCH_HIGH_SCORES_SUCCESS";
export function fetchHighScoresSuccess(data) {
	return {
		type: FETCH_HIGH_SCORES_SUCCESS,
		payload: data,
	}
}

export const FETCH_HIGH_SCORES_ERROR = "FETCH_HIGH_SCORES_ERROR";
export function fetchHighScoresError(err) {
	return {
		type: FETCH_HIGH_SCORES_ERROR,
		payload: err
	}
}

export function fetchHighScores() {
	return function(dispatch) {
		let endpoint = "/scores";
		return fetch(endpoint, {
			method: "GET",
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
			function compare(score1, score2) {
				if(score1.score < score2.score) {
					return 1;
				}
				if(score1.score > score2.score) {
					return -1;
				}
				return 0;
			}
			return dispatch(fetchHighScoresSuccess(data.sort(compare)));
		})
		.catch(error => {
			return dispatch(fetchHighScoresError(error));
		})
	}
}

export const SEND_HIGH_SCORE_SUCCESS = "SEND_HIGH_SCORE_SUCCESS";
export function sendHighScoreSuccess(score) {
	return {
		type: SEND_HIGH_SCORE_SUCCESS,
		payload: score
	}
}

export const SEND_HIGH_SCORE_ERROR = "SEND_HIGH_SCORE_ERROR";
export function sendHighScoreError(error) {
	return {
		type: SEND_HIGH_SCORE_ERROR,
		payload: error,
	}
}

export function sendHighScoreAsync(username, password, score) {
	return function(dispatch) {
		let endpoint = "/scores";
		return fetch(endpoint, {
			method: "POST",
			headers: {
				"Authorization": "Basic " + btoa(username + ":" + password),
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
		.then(data => {
			return dispatch(sendHighScoreSuccess(data));
		})
		.catch(error => {
			return dispatch(sendHighScoreError(error));
		})
	}
}