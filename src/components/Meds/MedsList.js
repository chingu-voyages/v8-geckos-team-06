import React, { Component } from 'react';
import axios from 'axios'

class MedsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			meds: ['Ibuprofeno', 'Metanfetamina', 'Cannabis']
		};
	}

	render() {
		const { meds } = this.state;
		return (
			<div>
				{ meds && meds.map((e) => {
					return <div key={e}>
						<p style={{color:'darkblue'}}>{e}</p>
					</div>
					})}
			</div>
		);
	}
}
export default MedsList;
