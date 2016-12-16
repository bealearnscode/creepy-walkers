import * as actions from './actions';
import passwordManager from '../password-manager';

const initialState = {
	isStarted: false,
	isLoggedIn: false,
	currentUser: "",
	currentPass: "",
	error: "",
	feedback: "",
	highScores: [],
};

export default function theReducer(state = initialState, action) {
	switch(action.type) {
		case actions.IS_GAME_STARTED:
			return Object.assign({}, state, {
				isStarted: action.payload
			});

		case actions.DESTROY_SESSION:
			return Object.assign({}, state, {
				isLoggedIn: false,
				currentUser: null,
				currentPass: null
			});

		case actions.SIGN_IN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedIn: true,
				currentUser: action.payloadUser,
				currentPass: action.payloadPass
			});

		case actions.SIGN_IN_ERROR:
			return Object.assign({}, state, {
				isLoggedIn: false,
				error: action.payload
			});

		case actions.REGISTER_USER_SUCCESS:
			return Object.assign({}, state, {
				feedback: "You have successfully registered"
			});

		case actions.REGISTER_USER_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});

		case actions.FETCH_HIGH_SCORES_SUCCESS:
			return Object.assign({}, state, {
				highScores: action.payload
			});

		case actions.FETCH_HIGH_SCORES_ERROR:
			return Object.assign({}, state, {
				error: action.payload
			});

		case actions.SEND_HIGH_SCORE_SUCCESS:
			return Object.assign({}, state, {
				highScores: state.highScores.concat({score: action.payload})
			});

		case actions.SEND_HIGH_SCORE_ERROR:
			return Object.assign({}, state, {
				error: action.payload
			});

		default:
			return state;
	}
}