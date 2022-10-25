import React, { Component } from 'react';
import './style.css';

export class Header extends Component {
  render() {
    return (
      <header>User - {(window.location.pathname==='/register')?'Registration':
      (window.location.pathname==='/login')?'Login':
      (window.location.pathname==='/home')?'Home':null}</header>
    )
  }
}

export default Header;