import React,{ Component } from 'react';
import Meds from '../Meds/Meds.js';
import './Dashboard.css';
import MhubApi from '../../services/api.js';
import { PropTypes } from 'prop-types';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userId: this.props.userId
    }
    this.api = new MhubApi();
  }

 async componentDidMount(){
  await this.api.checkUser(this.props.userId, this.props.token)
  .then(user => {
      console.log('user: ', user);
      this.setState({
        user
      });
      console.log('this Stated', this.state)
    }).catch((err) => console.log(err))

  }
  render() {
    const {userId, token, onLogOut} = this.props
    const { user } = this.state
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
      <br />
      <br />
      <br />
      <header className="item header">
        <h3>Welcome to your Dashboard</h3>
        <h4 style={{color: 'darkblue', fontSize: '2em'}}>{user && user.name}</h4>
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
