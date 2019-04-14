import React, { Component } from 'react';
import '../css/ForRent.css';
import arrowDown from '../img/arrow-down.png';

class ForRent extends Component{
    render(){
        return(
            <div className='filter'>
                <div className='param'>
                    For Rent
                </div>
                <img src={arrowDown} alt='arrow down' />
            </div>
        );
    }
}

export default ForRent;