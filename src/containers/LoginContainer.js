import Login from '../components/Login/Login.js';

import { changeDraft, login } from '../actions';

import { getDraft, getisLogged } from '../selectors';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
	draft: getDraft( state ),
	isLogged: getisLogged( state ),
	login: login(state),
})

const mapDispatchToProps = dispatch => ({
	onDraftChange: ( draftValue ) => {
		dispatch(changeDraft( draftValue));
	},
	onSetUser: (username) => {
		dispatch( login(username));
	},
})

export default connect( mapStateToProps, mapDispatchToProps)(Login);