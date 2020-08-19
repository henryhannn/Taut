import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <nav className="signin-signup">
        <Link to="/signin">Sign In</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.fullName}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    );
  
    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;