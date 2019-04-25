import Register from '../components/register/Register.js';

import { changeDraft } from '../actions'
import { register } from '../actions'
import { getDraft, getToken, getUserId, getisLogged } from '../selectors'

import { connect } from 'react-redux'

const mapStateToProps = state => ({
	draft: getDraft( state ),
	token: getToken( state ),
	userId: getUserId( state ),
	isLogged: getisLogged( state )
})

const mapDispatchToProps = dispatch => ({
	onDraftChange: ( draftValue ) => {
		dispatch( changeDraft(draftValue))
	},
	onSetUser: ( name, email, password, terms ) => {
		dispatch( register(name, email, password, terms ));
	},
})

export default connect( mapStateToProps, mapDispatchToProps)(Register);