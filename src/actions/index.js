import {
	ADD_USER,
	LOG_OUT,
	SAVE_TOKEN,
	CHANGE_DRAFT
} from '../constants/actionTypes.js';


export const logOut = (isLogged) => ({
	type: LOG_OUT,
	value: false,
});
export const login = ( values ) => (dispatch, getState, api ) =>
			api.login( values )
			.then( res => {
				dispatch({type: SAVE_TOKEN, token: res.token})
			})

export const register = ( values ) => (dispatch, getState, api) => 
			api.register(values)
			.then( res => {
					dispatch({
						type: SAVE_TOKEN,
						value: res._id ? res._id : null
					})
			}, ( err => {
				console.log('err',err);
				console.log('VALOERROR',values);
			}))
export const addUser = ( values ) => (dispatch, getState, api) =>
			api.addUser( values )
			.then( res => {
				dispatch({type:ADD_USER, users: res.user})
			})

export const changeDraft = (valueDraft) => ({
	type: CHANGE_DRAFT,
	value: valueDraft
})