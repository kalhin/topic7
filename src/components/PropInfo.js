import React, { Component } from 'react';
import '../css/PropInfo.css'

class PropInfo extends Component {
    render(){
        return(
            <div className='prop prop-info'>
                <h3>Aktas Properties</h3>
                <h3>Information</h3>
                <p>1234 Hacker St, San Francisco</p>
                <p>(123) 456-7890</p>
                <p>Mon — Sun: 8:00am - 6:00pm</p>   
            </div>
        );
    }
}

export default PropInfo;