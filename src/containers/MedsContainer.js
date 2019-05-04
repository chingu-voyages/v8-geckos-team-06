import Meds from '../components/Meds/Meds.js';
import {reset} from 'redux-form';

import { addMed, getMed } from '../actions'

import { connect } from 'react-redux'

import { getToken, getMeds, getMed } from '../selectors/'

const mapStateToProps = state => ({
	token: getToken(state),
	meds: getMeds(state),
	med: getMed(state)
})

const mapDispatchToProps = dispatch => ({
	onSetMed: ( manufacturer, comercialName, name, dosage, units, expiration, owner ) => {
		dispatch( addMed(manufacturer, comercialName, name, dosage, units, expiration, owner ));
		dispatch(reset('meds'));
	},
	onGetMed: (token) => {
		dispatch( getMed(token));
	}
})

export default connect( mapStateToProps, mapDispatchToProps)(Meds);