import React, { Component } from 'react';
import '../css/Footer.css';
import logo from '../img/logo-footer.png';

class Footer extends Component {
    render(){
        return(
            <footer>
                <div className='container'>
                    <img src={logo} alt='logo'/>
                    <p>Have you ever heard the expression, “Do not count your chickens before they hatch?” Maybe an older, wiser individual would tell you this to keep you from getting ahead of yourself.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;