import React, { Component } from 'react';
import './Header.css';
import Nav from './nav/Nav';
import logo from './img/logo.png';
import arrows from './img/arrows.png';
import heart from './img/heart.png';

class Header extends Component{
    render(){
        return(
            <div>
                <div className='empty'></div>
                <div className='heding'>
                    <div className='logoNavPosition'>
                        <img src={logo} alt='logo' className='logo'/>
                        <Nav />
                    </div>
                    <div className='icons'>
                        <img src={arrows} alt='arrows'/>
                        <img src={heart} alt='heart'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
