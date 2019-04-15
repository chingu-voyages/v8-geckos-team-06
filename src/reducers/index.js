import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import isLoggedReducer from './isLoggedReducer';

import authReducer from './authReducer';

import userIdReducer from './userIdReducer';


const rootReducer = combineReducers({

	form: formReducer,
	userId: userIdReducer,
	isLogged: isLoggedReducer,
	token: authReducer
})

export default rootReducer;