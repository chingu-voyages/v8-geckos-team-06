import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import MhubApi from '../services/api.js';

const loggerMiddleware = store => next => action => {
	console.group(action.type);
	console.log('%c prev state', 'color:red', store.getState())
	console.log('%c action', 'color: orange', action);
	const returnValue = next(action);
	console.log('%c next state','color:green', store.getState());
	console.groupEnd(action.type);
	return returnValue
}
const api = new MhubApi();

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument(api), loggerMiddleware))
	)

export default store;