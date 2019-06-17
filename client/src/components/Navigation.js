import React from 'react';
import { NavComp, NavItem } from '../styles/';

import LogoutImg from '../img/logout.png';

function Navigation(props) {
    return (
      <>
        <NavComp>
            <NavItem to="/jokes" activeclass="active-nav-item">Jokes</NavItem>
            <NavItem to="/login" activeclass="active-nav-item">Login</NavItem>
            <NavItem to="/signup" activeclass="active-nav-item">Signup</NavItem>
            <img src={LogoutImg} alt="logout" onClick={props.logout} />
        </NavComp>
      </>
    );
}
  
export default Navigation;