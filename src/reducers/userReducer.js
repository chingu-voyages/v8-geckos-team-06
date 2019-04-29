import {
	GET_USER
} from '../constants/actionTypes.js'

const initialState = ''

const userReducer = (state= initialState, action) => {
	switch (action.type) {
		case GET_USER:
			return [
			action.user
			]
		default:
			return state
	}
}

export default userReducer;
