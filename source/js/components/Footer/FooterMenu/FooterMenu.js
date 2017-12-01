import React, { Component } from 'react';
import './FooterMenu.scss';


class FooterMenu extends Component {
  render() {
    return (
      <ul className="col-4 footer-menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Channels</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Profile</li>
      </ul>
    );
    
  }
}

export default FooterMenu;
