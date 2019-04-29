import React from 'react';
import MedsList from '../Meds/MedsList.js';


const Dashboard = ({userId, token, isLogged, user}) => { 
  return (
  	<div className="container-fluid">
					<h1>THE DASHBOARD</h1>
					<h3>Welcome User: {userId}</h3>
					<hr />
				<div className="Searchbar">
					<input type="search" placeholder="Search Med"/>
				</div>
				<div className="sidePanel">
					SidePanel
				</div>
				<div className="listofMeds">
					<MedsList />
				</div>
				<div>
				</div>
				<div>
					<p>Lorem ipsum dolor sit amet,
					 consectetur adipisicing elit. 
					 Eius quam repudiandae temporibus 
					 voluptatem porro! Atque at, laboriosam 
					 dolores nulla itaque, consectetur a
					 recusandae vero officia eius error
					 distinctio doloremque, tempora!</p>
				</div>
			</div>
  )
}
export default Dashboard;