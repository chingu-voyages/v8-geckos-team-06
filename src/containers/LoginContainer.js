import Login from '../components/Login/Login.js';

import { changeDraft } from '../actions';

import { getDraft, getisLogged, getToken } from '../selectors';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
	draft: getDraft( state ),
	isLogged: getisLogged( state ),
	token: getToken(state)
})

const mapDispatchToProps = dispatch => ({

	onDraftChange: ( draftValue ) => {
		dispatch(changeDraft( draftValue));
	},
})

export default connect( mapStateToProps, mapDispatchToProps)(Login);