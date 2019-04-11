import Register from '../components/register/Register.js';

import { changeDraft, register } from '../actions'
import { getDraft, getToken, getUserId } from '../selectors'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
	draft: getDraft( state ),
	token: getToken( state ),
	userId: getUserId( state )
})

const mapDispatchToProps = dispatch => ({
	onDraftChange: ( draftValue ) => {
		dispatch( changeDraft(draftValue))
	},
	onSetUser: ( username, email, password ) => {
		dispatch( register(username, email, password ));
	},
})

export default connect( mapStateToProps, mapDispatchToProps)(Register);