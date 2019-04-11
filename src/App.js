import React, {Component} from 'react';
import './App.css';

import NavBar from './components/nav/NavBar';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import Logo from './components/logo/Logo';

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
      <div className="App fade-in">
        { this.state.route === 'home'
          ?
            <header className="App-header">
              <div className="title">
                Meds<span>HUB</span>
              </div>
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
