import {
	SAVE_TOKEN,
	LOG_OUT
} from '../constants/actionTypes.js'

const initialStaste = false

const isLoggedReducer = (state=initialStaste,action) => {
	switch (action.type) {
		case SAVE_TOKEN:
			return true;
		case LOG_OUT:
			return false;
		default:
			return state;
	}
}
export default isLoggedReducer;