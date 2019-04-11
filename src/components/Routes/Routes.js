import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import LoginContainer from '../../containers/LoginContainer'
import HomeContainer from '../../containers/HomeContainer';
import DashBoardContainer from '../../containers/DashBoardContainer';
import RegisterContainer from '../../containers/RegisterContainer'
import NotFound from '../NotFound.js';
import PrivateRoute from './PrivateRoute';

const Routes = ({isLogged}) => (
	<Switch>
			<Route exact path="/" component={ HomeContainer} />
			<Route exact path="/login" component={ LoginContainer} />
			<Route exact path="/register" component={ RegisterContainer} />
			<PrivateRoute path="/dashboard" isLogged={ isLogged} component={DashBoardContainer} />
		 <Route  component={ NotFound }/>
	</Switch>
	)

export default withRouter(Routes);