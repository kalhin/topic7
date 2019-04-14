import React, { Component } from 'react';
import '../css/ContactUs.css'
import PropInfo from './PropInfo';
import PropSell from './PropSell';

class ContactUs extends Component {
    render(){
        return(
            <section className='contactUs'>
                <div className='container'>
                    <PropInfo />
                    <PropSell />
                </div>
            </section>
        );
    }
}

export default ContactUs;