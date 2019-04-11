import React, { Component } from 'react';

class Dashboard extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="sidePanel">
					SidePanel
				</div>
				<div className="listofMeds">
					ListofMeds
				</div>
				<div className="user">
					User Info
				</div>
				<div className="Searchbar">
					<input type="search" placeholder="Search Med"/>
				</div>
			</div>
		);
	}
}

export default Dashboard;