import React, { Component } from 'react';
import './ForRent.css';

class ForRent extends Component{
    render(){
        return(
            <div className='filter'>
                <div className='param'>
                    For Rent
                </div>
                <img src={require('./img/arrow-down.png')} alt='arrow down' />
            </div>
        );
    }
}

export default ForRent;