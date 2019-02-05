import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {

  render(){

    return(

      <header>
        <div className="container">
          <div className="navbar-mobile-header-top">
            <Link to="/" className="navbar-logo">react<span>demo</span></Link>
            <div className="navbar-collapse-button"><i className="fas fa-bars"></i></div>
          </div>
          <nav className="navbar-nav">
            <ul className="navbar-list">
              <li className="navbar-list-item"><Link to="/">HOME</Link></li>
              <li className="navbar-list-item"><Link to="/bloglist">BLOGS</Link></li>
              <li className="navbar-list-item"><Link to="/msgboard">FORUM</Link></li>
              <li className="navbar-list-item">
                <a href="https://github.com/gunesaydin/react-demo">GIT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navbar;