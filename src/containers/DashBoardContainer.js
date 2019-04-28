import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard.js';
import { getDraft, getisLogged, getToken, getUserId, getUser } from '../selectors';
import MhubApi from '../services/api.js'


const mapStateToProps = state => ({
	draft: getDraft( state ),
	isLogged: getisLogged( state ),
	token: getToken(state),
	userId: getUserId(state),
	user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
	getUserData: (id) => {
		const api = MhubApi();
		dispatch({
			type: 'LOADER_ON',
		})
		Promise.all([
			api.checkUser(id)
			]).then( (user) => {
				dispatch({
					type: 'GET_USER',
					user
				})
				dispatch({
					type: 'LOADER_OFF'
				})
			})
	}
	})





export default connect( mapStateToProps, mapDispatchToProps )(Dashboard)
