import React, { Component } from 'react';
import MedsList from './MedsList.js';
import MedsForm from './MedsForm.js';
import MhubApi from '../../services/api.js';

class Meds extends Component {
constructor(props) {
	super(props);
 this.state = {
 	token: props.token,
 	id: props.id,
 	meds: []
 };
	this.api = new MhubApi();
	this.getMedsData = this.getMedsData.bind(this);
}

getMedsData() {
	this.api.getMeds(this.state.token)
		.then( (response) => console.log('response api call:', response) || this.setState({
			meds: [
			response
			]
		}))
		.catch((err)=> console.log(err));
}

	render() {
		const { meds } = this.state;
		console.log('This are the meds: ', meds)
		return (
			<div className="MedsList">
				<h3>Medication List</h3>
				<button className="getmeds-btn" onClick={this.getMedsData}>Bring Meds</button>

				{meds && <MedsList meds={meds}/>}

				<h5>Do you want to donate a Med?</h5>
				<MedsForm />

			</div>
		);
	}
}

export default Meds
