import React, {Component} from 'react';
import './App.css';
import logo from './assets/medicine.svg';

import NavBar from './nav/NavBar';
import Signin from './signin/Signin';
import Register from './register/Register';
import Logo from './logo/Logo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
        { this.state.route === 'home'
          ?
            <header className="App-header">
              <h2 className="title">
                Meds Hub
              </h2>
              <Logo />
              <NavBar onRouteChange={this.onRouteChange}/>
            </header>
          : (
            this.state.route === 'signin'
              ? <Signin onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    )
  }

}

export default App;
