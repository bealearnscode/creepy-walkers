import * as actions from './actions';

const initialState = {
	isStarted: false,
	isLoggedIn: false,
	currentUser: "",
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

		default:
			return state;
	}
}