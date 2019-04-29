import { LOGIN_SUCCESS, SAVE_TOKEN, LOG_OUT } from '../constants/actionTypes.js';

const initialState = ''

const authReducer = (state=initialState, action) => {
	switch( action.type) {
		case LOGIN_SUCCESS:
			return [
			action.value
			]
		case SAVE_TOKEN:
			return action.token;
		case LOG_OUT:
			return '';
		default:
			return state;
		}
}

export default authReducer;

