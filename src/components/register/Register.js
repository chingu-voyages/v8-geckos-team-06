import React from 'react';
import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      tos: false
    }
  }

  onRegisterSubmit = (e) => {
    const { onRouteChange } = this.props;
    e.preventDefault();
    console.log(this.state);
    onRouteChange('login');
  }

  onRegisterInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <main className="Register">
        <form className="register-form" onSubmit={this.onRegisterSubmit} autoComplete="off">

          <h3 className="register-title">Register</h3>
          {/* <div className="pill-wrapper">
            <div className="pill-icon"></div>
          </div> */}

          <div id="sign_up" className="sign_up">
            <div className="input-container">
              <input className="form-input input-filled" type="text" name="name"  id="name" placeholder="John Doe" required value={this.state.name} onChange={this.onRegisterInputChange}/>
              <label className="name" htmlFor="name">Name</label>
            </div>
            <div className="input-container">
              <input className="form-input" type="email" name="email"  id="email" placeholder="john@doe.com" required value={this.state.email} onChange={this.onRegisterInputChange}/>
              <label className="email" htmlFor="email">Email</label>
            </div>
            <div className="input-container">
              <input className="form-input" type="password" name="password"  id="password" placeholder="type your password" required value={this.state.password} onChange={this.onRegisterInputChange}/>
              <label className="password" htmlFor="password">Password</label>
            </div>
            <div className="input-container">
              <input className="form-input" type="password" name="confirmPassword"  id="confirm-password" placeholder="re-type your password" required value={this.state.confirmPassword} onChange={this.onRegisterInputChange}/>
              <label className="confirm-password" htmlFor="confirPassword">Confirm Password</label>
            </div>
            <div className="tos-container">
              <input className="tos" type="checkbox" name="tos" required checked={this.state.tos} onChange={this.onRegisterInputChange}/>
              <label htmlFor="tos">I agree to the <span>Terms & Conditions</span></label>
            </div>
          </div>
          <div className="form-buttons">
            <input className="register-btn" type="submit" value="Sign Up" />
          </div>
          <div className="form-links">
            <p onClick={() => onRouteChange('home')} className="form-link">Home </p>
          </div>
        </form>
      </main>
    );

  }
}

export default Register;
