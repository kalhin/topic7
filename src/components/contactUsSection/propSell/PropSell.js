import React, { Component } from 'react';
import './PropSell.css'

class PropSell extends Component {
    render(){
        return(
            <div className='prop sell-prop'>
                <h3>Want to Sell</h3>
                <h3>Property?</h3>
                <p>Let us create a tailored strategic marketing plan and keep track of the selling process.</p>
                <button className="contact-us">Contact Us</button> 
            </div>
        );
    }
}

export default PropSell;