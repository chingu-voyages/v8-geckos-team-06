import React, { Component } from 'react';
import MedsList from './MedsList.js';
import MedsForm from './MedsForm.js';
import MhubApi from '../../services/api.js';

class Meds extends Component {
constructor(props) {
	super(props);
	this.state = {
		meds: []
	}
	this.api = new MhubApi();
}
componentDidMount() {
		this.api.getMeds(this.props.token).then(res=> 
			this.setState({
				meds: res
		}))
	}
	render() {
		return (
			<div>
				<h3>Medication List</h3>
				<MedsList />
				<br></br>
				<hr/>
				<h5>Do you want to donate a Med?</h5>
				<MedsForm />
			</div>
		);
	}
}

export default Meds
