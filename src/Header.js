import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    render() {
      return (
        <div className="header">
        <div className="logo">
        <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img>
        </div>
        <div className="navBar">
        <a href="#"> About us</a>
        <a href="#">Career</a>
        <a href="#"> Departments</a>

        </div>
      </div>
      );
    }
  }
  
  export default Header ;