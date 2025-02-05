import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import BackgroundImage from './img/back.jpg';

import Navigation from './components/Navigation.js';
import SignupPage from './components/SignupPage.js';
import LoginPage from './components/LoginPage.js';
import JokesPage from './components/JokesPage.js';

class App extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  }
  render() {
    return (
      <div className="App">
        {/* NAVIGATION */}
        <Navigation logout={this.logout} />

        {/* BACKGROUND IMAGE */}
        {/* TO-DO: change inline styling to styled components */}
        <img src={BackgroundImage} alt="cloun" style={{height: "92vh", position: "absolute", right: "0"}} />
        
        <div className="page-wrapper" style={{position: "relative"}}>
          {/* ROUTES */}
          <Route exact path="/" component={JokesPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/jokes" component={JokesPage} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);