import React from 'react';
import { NavComp, NavItem } from '../styles/';

import LogoutImg from '../img/logout.png';

function Navigation(props) {
    return (
      <>
        <NavComp>
            <div className="app-name">
              <h1><span className="red">Dad</span><br/><span className="line-through">Dead</span> Jokes</h1>
            </div>
            <div className="navigation-wrapper">
              <NavItem to="/jokes" activeclass="active-nav-item">Jokes</NavItem>
              <NavItem to="/login" activeclass="active-nav-item">Login</NavItem>
              <NavItem to="/signup" activeclass="active-nav-item">Signup</NavItem>
              <img src={LogoutImg} alt="logout" onClick={props.logout} />
            </div>
            
        </NavComp>
      </>
    );
}
  
export default Navigation;