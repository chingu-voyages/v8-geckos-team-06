import React from 'react';

const Dashboard = ({userId, token, isLogged, user}) => {
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
					<h3>Welcome User: {userId}</h3>
				</div>
			</div>
  )
}
export default Dashboard;