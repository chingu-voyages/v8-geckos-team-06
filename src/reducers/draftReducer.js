import {
	CHANGE_DRAFT,
	LOG_OUT,
	LOGIN_SUCCESS
} from '../constants/actionTypes.js'

const initialState = ''

const draftReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return '';
		case LOG_OUT:
			return '';
		case CHANGE_DRAFT:
			return action.value;
		default:
			return state;
	}
}
export default draftReducer;