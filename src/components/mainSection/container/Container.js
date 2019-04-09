import React, { Component } from 'react';
import './Container.css';
import MainSection from '../MainSection';

class Container extends Component {
  render() {
    return (
      <div className='background'>
        <div className='container'>
          <MainSection />
        </div>
      </div>
    );
  }
}

export default Container;