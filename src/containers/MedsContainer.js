import Meds from '../components/Meds/Meds.js';

import { addMed, getMed } from '../actions'

import { connect } from 'react-redux'

import { getToken, getMeds } from '../selectors/'

const mapStateToProps = state => ({
	token: getToken(state),
	meds: getMeds(state)
})

const mapDispatchToProps = dispatch => ({
	onSetMed: ( manufacturer, comercialName, name, dosage, units, expiration, owner ) => {
		dispatch( addMed(manufacturer, comercialName, name, dosage, units, expiration, owner ));
	},
	onGetMed: (token) => {
		dispatch( getMed(token));
	}
})

export default connect( mapStateToProps, mapDispatchToProps)(Meds);