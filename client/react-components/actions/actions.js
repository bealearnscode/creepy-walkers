var fetch = require("isomorphic-fetch");


exports.ADD_USER = ADD_USER;
exports.addUser = addUser;

exports.FETCH_GAME = FETCH_GAME;
exports.fetchGame = fetchGame;

exports.SIGN_IN_SUCCESS = SIGN_IN_SUCCESS;
exports.signInSuccess = signInSuccess;

exports.SIGN_IN_ERROR = SIGN_IN_ERROR;
exports.signInError = signInError;



var FETCH_GAME = "FETCH_GAME";
function fetchGame(game) {
	return {
		type: FETCH_GAME,
		payload: game
	};
}

var ADD_USER = "ADD_USER";
function addUser(user) {
	return {
	    type: ADD_USER,
	    payload: user
	};
}

var SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
function signInSuccess(user) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: user
    };
}

var SIGN_IN_ERROR = "SIGN_IN_ERROR";
function signInError(err) {
    return {
        type: SIGN_IN_ERROR,
        payload: err
    };
}

var logInAsync = function(username, password) {
    var endpoint = "/users/login";
    return fetch(endpoint, {
        method: "post",
        headers: {
            
        },
        
            body:JSON.stringify({
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
        .then (response => {
            return dispatch(SIGN_IN_SUCCESS(user));
        })
            
        })
        
    };


