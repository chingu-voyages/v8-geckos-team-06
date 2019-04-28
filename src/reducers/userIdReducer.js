import {
	SET_ID
} from '../constants/actionTypes.js';
const initialState = '';
const userIdReducer = (state=initialState,action) => {
	switch (action.type) {
		case SET_ID:
			return action.userId;
		default:
			return state;
	}
}
export default userIdReducer;