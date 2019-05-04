import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard.js';
import { getDraft, getisLogged, getToken, getUserId, getUser } from '../selectors';
import { logOut } from '../actions';



const mapStateToProps = state => ({
	draft: getDraft( state ),
	isLogged: getisLogged( state ),
	token: getToken(state),
	userId: getUserId(state),
	user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
onGetUser: () => {
},
onLogOut: () => {
	console.log('Im logging out');
	dispatch( logOut() );
	}
})





export default connect( mapStateToProps, mapDispatchToProps )(Dashboard)
