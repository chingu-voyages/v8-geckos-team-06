import React, { Component } from 'react';

class MedsList extends Component {
	state = {
		meds: ['Cannabis', 'OIL CBD', 'LSD', 'XTZ']
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
