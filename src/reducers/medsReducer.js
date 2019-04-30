import { ADD_MED, GET_MEDS} from '../constants/actionTypes.js';

const initialState = localStorage.meds || [];

const medsReducer = (state=initialState, action) => {
	switch( action.type) {
		case ADD_MED:
			return [
			action.med
			]
		case GET_MEDS:
			localStorage.setItem('meds', action.meds);
			return [
				action.meds
			];
		default:
			return state;
		}
}

export default medsReducer;