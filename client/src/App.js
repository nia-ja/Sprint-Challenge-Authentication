import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import SignupPage from './components/SignupPage.js';
import LoginPage from './components/LoginPage.js';
import JokesPage from './components/JokesPage.js';

function App() {
  return (
    <div className="App">

      <Navigation />

      {/* ROUTES */}
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/jokes" component={JokesPage} />

    </div>
  );
}

export default App;
