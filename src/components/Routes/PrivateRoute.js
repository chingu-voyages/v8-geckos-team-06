import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import DashBoardContainer from '../../containers/DashBoardContainer.js';

const PrivateRoute = ( { path, component, isLogged} ) => {
		return (
			<div>
				 {isLogged ? <Route path={ path } component={DashBoardContainer} /> : <Redirect to="/" />}
			</div>
			)
}

export default PrivateRoute;