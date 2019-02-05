import React, { Component } from 'react';

import './Popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.initPop = this.initPop.bind(this);
  }

  // Setting timeout on Popup element after component is mounted

  componentDidMount() {
    setTimeout(() => {
      this.initPop();
    }, 5000);
  }

  /* Removing popup element from DOM when close button or anywhere else 
  except popup window is clicked */

  onClose() {
    let pop = document.getElementById('app-popup');
    pop.parentElement.removeChild(pop);
  }

  // Selects and switches the popup element's class to make it visible

  initPop() {
    let popup = document.getElementById('app-popup');
    popup.classList.remove('hide');
    popup.classList.add('show');
  }

  render() {

    return(
      <div>
        <div id="app-popup" className="hide">
          <div id="popup">
            <h1 className="popup-h1">Hi!</h1>
            <p className="popup-p">
              Welcome to the React version of my demo app.
            </p>
            <button className="popup-btn" onClick={this.onClose}>Close</button>
          </div>
          <div id="filter" onClick={this.onClose}></div>
        </div>
      </div>
    )

  }
}

export default Popup;