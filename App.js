import React, { Component } from 'react';
import fire from './config/fire'
import Login from './Login.js';
import SignUp from './SignUp.js';
import Home from './Home.js';
import Toolbar from './components/Toolbar.js';
import PlannedParking from './components/PlannedParking.js';
import Parkmates from './components/Parkmates.js';
import Account from './components/Account.js';
import SideDrawer from './components/SideDrawer.js';
import Backdrop from './components/Backdrop.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <Router>
          <div className="App">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/planned-parking" component={PlannedParking}/>
            <Route path="/parkmates" component={Parkmates}/>
            <Route path="/account" component={Account}/>
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
