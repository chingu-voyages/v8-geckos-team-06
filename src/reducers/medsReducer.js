import { ADD_MED, GET_MEDS, GET_MED, LOG_OUT} from '../constants/actionTypes.js';

const initialState = localStorage.meds || [];

const medsReducer = (state=initialState, action) => {
	switch( action.type) {
		case ADD_MED:
			return [
				action.med
			]
		case GET_MED:
			return [
				action.med
			]
		case GET_MEDS:
			return [
				action.meds
			];
		case LOG_OUT:
			return state
		default:
			return state;
		}
}

export default medsReducer;