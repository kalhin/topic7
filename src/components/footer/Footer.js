import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className='container'>
                    <img src={require('./img/Logo.png')} alt='logo'/>
                    <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;