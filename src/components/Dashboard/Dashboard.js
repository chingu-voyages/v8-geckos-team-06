import React from 'react';
import Meds from '../Meds/Meds.js';
import './Dashboard.css';


const Dashboard = ({userId, token, isLogged, onLogOut, user}) => {
  return (
  	<div className="container-fluid grid-container Dashboard">
      <nav className="dash-nav">
        <h1 className="dash-title">Meds<span>HUB</span></h1>
        <button
          className="logout-btn"
          onClick={ e => {
            e.preventDefault()
            onLogOut()
          }}
        >Log Out
        </button>
      </nav>
      <header className="item header">
        <h3>Hi <span>{userId}!</span></h3>
        <h3>Welcome to your Dashboard</h3>
      </header>
      {/* <hr /> */}

      <div className="dash-main-grid">
        <div className="item sidePanel">
          SidePanel
          <div className="Searchbar">
            <input type="search" placeholder="Search Med"/>
          </div>
        </div>
        <div className="item listofMeds">
          <Meds token={token} userId={userId} />
        </div>

      </div>
      <div className="item footer">
      </div>
      <div className="item footer">
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
