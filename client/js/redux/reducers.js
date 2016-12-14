import * as actions from './actions';

const initialState = {
	isStarted: false,
	isLoggedIn: false,
	currentUser: "",
	error: "",
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
				currentUser: null
			});

		case actions.SIGN_IN_SUCCESS:
			return Object.assign({}, state, {
				isLoggedIn: true,
				currentUser: action.payload
			});

		case actions.SIGN_IN_ERROR:
			return Object.assign({}, state, {
				isLoggedIn: false,
				error: action.payload
			});

		case actions.REGISTER_USER_SUCCESS:
			return Object.assign({}, state, {

			});

		case actions.REGISTER_USER_ERROR:
			return Object.assign({}, state, {
				error: action.payload,
			});

		default:
			return state;
	}
}