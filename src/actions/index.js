import {
	ADD_USER,
	LOG_OUT,
	SAVE_TOKEN,
	SET_ID,
	CHANGE_DRAFT,
	ADD_MED,
	GET_MEDS,
	GET_MED,
	GET_USER
} from '../constants/actionTypes.js';


export const logOut = (isLogged) => ({
	type: LOG_OUT,
	value: false,
});
export const login = ( values ) => (dispatch, getState, api ) =>
			api.login(values)
			.then( res => {
				dispatch({type: SAVE_TOKEN, token: res.token});
				dispatch({type: SET_ID, userId: res.id});
			})

export const getUserData = ( values ) => (dispatch, getState, api) => 
	api.checkUser(values)
		.then( res => {
			dispatch({ type: GET_USER, user: res.user})
	});

export const register = ( values ) =>  (dispatch, getState, api) => 
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

export const addMed = ( values ) => (dispatch, getState, api) => 
	api.addingMed( values )
		.then ( res => {
			console.log('res:', res)
			dispatch({
				type: ADD_MED,
				med: res.med
			})
			dispatch({
				type:GET_MEDS,
				meds: res.meds
			})
		})

		export const getMed = (token) => (dispatch, getState, api) => 
			api.getMeds(token)
				.then (res => {
					console.log('actioncreatorGETMED:', res);
					dispatch({
						type: GET_MED,
						medsa: res.meds
					})
				})