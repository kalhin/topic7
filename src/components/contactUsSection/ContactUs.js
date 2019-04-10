import React, { Component } from 'react';
import './ContactUs.css'
import PropInfo from './propInfo/PropInfo';
import PropSell from './propSell/PropSell';

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