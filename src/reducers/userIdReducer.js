import {
	SIGN_OK
} from '../constants/actionTypes.js';
const initialState = '';
const userIdReducer = (state=initialState,action) => {
	switch (action.type) {
		case SIGN_OK:
			return action.id;
		default:
			return state;
	}
}
export default userIdReducer;