import React, { Component } from 'react';
import './style.css';

export class Header extends Component {
  render() {
    return (
      <header>
        <a href="/login" class="logo">HireTalent</a>
      </header>
    )
  }
}

export default Header;