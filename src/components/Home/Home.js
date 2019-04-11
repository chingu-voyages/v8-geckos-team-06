import React, { Component } from 'react';
import Logo from '../logo/Logo';
import NavBar from '../nav/NavBar';

class Home extends Component {
	render() {
		return (
				<div className="App fade-in">
  			<header className="App-header">
    		<div className="title">
      	Meds<span>HUB</span>
    		</div>
    		<Logo />
    		<NavBar />
  			</header>
				</div>
		);
	}
}

export default Home;