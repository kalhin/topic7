import React, { Component } from 'react';
import './Header.css';
import Nav from './nav/Nav';

class Header extends Component{
    render(){
        return(
            <div>
                <div className='empty'></div>
                <div className='heding'>
                    <div className='logoNavPosition'>
                        <img src={require('./img/logo.png')} alt='logo' className='logo'/>
                        <Nav />
                    </div>
                    <div className='icons'>
                        <img src={require('./img/arrows.png')} alt='arrows'/>
                        <img src={require('./img/heart.png')} alt='heart'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
