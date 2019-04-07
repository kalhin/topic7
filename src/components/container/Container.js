import React, { Component } from 'react';
import './Container.css';
import Header from '../header/Header'

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default Container;