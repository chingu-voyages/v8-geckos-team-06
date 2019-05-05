import Meds from '../components/Meds/Meds.js';

import { addMed, getMedData } from '../actions'

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
	},
	onGetMed: (token) => {
		dispatch( getMedData(token));
	}
})

export default connect( mapStateToProps, mapDispatchToProps)(Meds);