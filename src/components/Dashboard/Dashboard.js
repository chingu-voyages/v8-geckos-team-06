import React,{ Component } from 'react';
import Meds from '../Meds/Meds.js';
import './Dashboard.css';
import { PropTypes } from 'prop-types';
// import { logOut, getUserData } from '../../actions/'


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }


 componentDidMount() {
  this.props.getUserData(this.props.userId, this.props.token)
    .then(user => this.setState({
      user
    }))
    .catch(err => console.log(err))
 }

  render() {
    const {userId, token, logOut} = this.props
    const { user } = this.state
    console.log('User: ', this.state.user)
    return (
      <div className="container-fluid grid-container Dashboard">
      <nav className="dash-nav">
        <h1 className="dash-title">Meds<span>HUB</span></h1>
        <button
          className="logout-btn"
          onClick={logOut}
        >Log Out
        </button>
      </nav>
      <br />
      <br />
      <br />
      <header className="item header">
        <h3>Welcome to your Dashboard</h3>
        <h4 style={{color: '#19649a', fontSize: '2em'}}>{user && user.name}</h4>
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
        <p>MEDS HUB FOOTER COMIN UP</p>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  userId: PropTypes.string,
  token: PropTypes.string,
  onLogOut: PropTypes.func,
  user: PropTypes.object,
  };
export default Dashboard;
