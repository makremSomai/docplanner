import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Introduction from './Introduction';
import Services from './Services';
import Local from './Local';
import Platform from './Platform';
import Card from './Card';
class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <Introduction />
      <Services />
      <Local />
      <Platform  />
      <Card />
    </div>
    );
  }
}

export default App;
