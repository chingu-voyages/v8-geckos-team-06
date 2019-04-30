import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import isLoggedReducer from './isLoggedReducer';

import authReducer from './authReducer';

import userIdReducer from './userIdReducer';

import userReducer from './userReducer';

import medsReducer from './medsReducer.js';



const rootReducer = combineReducers({

	form: formReducer,
	userId: userIdReducer,
	user: userReducer,
	isLogged: isLoggedReducer,
	token: authReducer,
	meds: medsReducer
})

export default rootReducer;