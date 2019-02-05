import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

  render(){

    return(
      <footer className="footer">
        <p className="footer-text">Created by Gunes Aydin</p>
        <ul className="footer-links">
          <li><a href="http://www.gunesa.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-sun"></i></a></li>
          <li><a href="https://github.com/gunesaydin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://twitter.com/gunesaydin" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/gunes-aydin/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </footer>
    )
  }
}

export default Footer;