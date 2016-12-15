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
	let endpoint = "/users/login";
    return fetch(endpoint, {
        method: "post",
        body: JSON.stringify({
            username: username,
            password: password
        })
        .then(function(res) {
            if(res.status < 200 || res.status >= 300) {
                var error = new Error(res.statusText);
                error.res = res;
                throw error;
            }
            res = res.json();
        })
        .then(response => {
            return dispatch(SIGN_IN_SUCCESS(user));
        })
            
        })
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
        let endpoint = '/users';
        fetch(endpoint, {
            method:'post',
            //var headers = new headers
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
                body:JSON.stringify({
                username: username,
                password: password
        })})
            .then(function(res) {
                if(res.status < 200 || res.status >= 300) {
                    //bad response :(
                    var error = new Error(res.statusText);
                    error.res = res;
                    throw error;
                }
                res = res.json();
            })
            .then(response => {
                //if success, dispatch addThoughtSuccess(response);
                return dispatch(registerUserSuccess());
            })
            
        .catch(err => {
            //if fail, dispatch addThoughtFail(error);
            console.log(err);
            return dispatch(registerUserError(err));
        });
    };
}

export const DESTROY_SESSION = 'DESTROY_SESSION';
export function destroySession() {
	return {
		type: DESTROY_SESSION,
	}
}