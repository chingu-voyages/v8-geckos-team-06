import { LOGIN_SUCCESS, SAVE_TOKEN, LOG_OUT } from '../constants/actionTypes.js';

const initialState = {
	token: localStorage.access_token
}

const authReducer = (state=initialState, action) => {
	switch( action.type) {
		case LOGIN_SUCCESS:
			return [
			action.value
			]
		case SAVE_TOKEN:
		localStorage.setItem('access_token');
			return action.token;
		case LOG_OUT:
			return '';
		default:
			return state;
		}
}

export default authReducer;

// import {
//  SET_ACCESS_TOKEN,
//  CLEAR_ACCESS_TOKEN
// } from '../constants/action-types'
// 
// const initialState = (token => ({
//  token
// }))(localStorage.access_token)
// 
// export default (state = initialState, { type, ...payload }) => {
//  switch (type) {
//    case SET_ACCESS_TOKEN:
//      localStorage.setItem('access_token', payload.token)
//      return {
//        ...state,
//        token: payload.token
//      }
//    case CLEAR_ACCESS_TOKEN:
//      localStorage.removeItem('access_token')
//      return {
//        ...state,
//        token: null
//      }
//    default:
//      return state
//  }
// }
// hice 