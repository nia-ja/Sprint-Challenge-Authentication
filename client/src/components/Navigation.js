import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavComp, NavItem } from '../styles/';

function Navigation(props) {
    return (
      <>
        <NavComp>
            <NavItem to="/login" activeClass="active-nav-item">Login</NavItem>
            <NavItem to="/signup" activeClass="active-nav-item">Signup</NavItem>
            <NavItem to="/jokes" activeClass="active-nav-item">Jokes</NavItem>
        </NavComp>
      </>
    );
}
  
export default Navigation;