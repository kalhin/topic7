import React, { Component } from 'react';
import '../css/ContactCard.css';
import opi from '../img/opi-avatar.png';

class ContactCard extends Component {
    render() {
        return(
            <div className='card-card contact-card'>
                <img src={opi} alt='avatar'/>
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