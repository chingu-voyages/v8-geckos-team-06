import React, { Component } from 'react';
import axios from 'axios'

class MedsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			meds: ['Ibu', 'Oxi', 'Metadona', 'Aspirinetas']
		};
	}
	getMeds() {
		this.axios.get('/meds').then((res)=> console.log('res:', res))
	}
	render() {
		const { meds } = this.state;
		return (
			<div>
				{ meds && meds.map((e) => {
					return <div>
						<p>e</p>
					</div>
					})}
			</div>
		);
	}
}
export default MedsList;
