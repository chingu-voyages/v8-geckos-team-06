import {
	SET_ID,
	LOG_OUT
} from '../constants/actionTypes.js';
const initialState = localStorage.user_id || ''
const userIdReducer = (state=initialState,action) => {
	switch (action.type) {
		case SET_ID:
			localStorage.setItem('user_id', action.userId)
			return action.userId;
		case LOG_OUT:
		localStorage.removeItem('user_id')
			return ''
		default:
			return state;
	}
}
export default userIdReducer;