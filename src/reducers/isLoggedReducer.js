import {
	SAVE_TOKEN,
	LOG_OUT
} from '../constants/actionTypes.js'

const initialState = localStorage.isLogged || false;

const isLoggedReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_TOKEN:
			localStorage.setItem('is_Logged', true);
			return true;
		case LOG_OUT:
			localStorage.removeItem('is_Logged')
			return false;
		default:
			return state;
	}
}
export default isLoggedReducer;