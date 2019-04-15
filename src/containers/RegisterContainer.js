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
	onSetUser: ( name, email, password, tos, location, image, ) => {
		dispatch( register(name, email, password, tos, location, image ));
	},
})

export default connect( mapStateToProps, mapDispatchToProps)(Register);