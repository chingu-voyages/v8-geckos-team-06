import React, { Component } from 'react';
import MedsList from './MedsList.js';
import MedsForm from './MedsForm.js';

class Meds extends Component {
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
