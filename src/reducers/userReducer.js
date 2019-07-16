import {
	GET_USER,
	LOG_OUT
} from '../constants/actionTypes.js'

const initialState = {}

const userReducer = (state= initialState, action) => {
	switch (action.type) {
		case GET_USER:
			localStorage.setItem('userInfo', action.user);
			return action.user
		case LOG_OUT:
		localStorage.removeItem('userInfo');
		return {}
		default:
			return state
	}
}

export default userReducer;
