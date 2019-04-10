import React, { Component } from 'react';
import './ContactCard.css';

class ContactCard extends Component {
    render() {
        return(
            <div className='card-card contact-card'>
                <img src={require('./img/opi-avatar.png')} alt='avatar'/>
                <div>
                    <p className='address'>Opi Watihana</p>
                    <p className='name'>Sales Manager</p>
                </div>
                <button>Contact</button>
            </div>
        ); 
    }
}

export default ContactCard; 