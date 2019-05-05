import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard.js';
import { getDraft, getisLogged, getToken, getUserId, getUser } from '../selectors';
import { logOut, getUserData } from '../actions';



const mapStateToProps = state => ({
	draft: getDraft( state ),
	isLogged: getisLogged( state ),
	token: getToken(state),
	userId: getUserId(state),
	user: getUser(state)
});

export default connect( mapStateToProps, { getUserData, logOut } )(Dashboard)
