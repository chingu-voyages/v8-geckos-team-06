import React, { Component } from 'react';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			props: props
		}
	}

	render() {
		console.log('props:', this.state.props);
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
				<div>
					<h1>THE DASHBOARD</h1>
					<h3>This is fucked up</h3>
				</div>
			</div>
		);
	}
}

export default Dashboard;