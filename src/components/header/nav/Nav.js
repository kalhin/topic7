import React, { Component } from 'react';
import './Nav.css'

// const navList = [
//     {pageWay: '#', pageName: 'Homepage'},
//     {pageWay: '#', pageName: 'About Us'},
//     {pageWay: '#', pageName: 'For Rent'},
//     {pageWay: '#', pageName: 'For Sale'},
//     {pageWay: '#', pageName: 'Our Agents'},
//     {pageWay: '#', pageName: 'Contact Us'}
// ];

class Nav extends Component{ 
    render(){
        return (
            <div className='some'>
                <nav>
                    <ul className='menu'>
                        <li>
                            <a href={'#'}>Homepages</a>
                        </li>
                        <li>
                            <a href={'#'}>About Us</a>
                        </li>
                        <li>
                            <a href={'#'}>For Rent</a>
                        </li>
                        <li>
                            <a href={'#'}>For Sale</a>
                        </li>
                        <li>
                            <a href={'#'}>Our Agents</a>
                        </li>
                        <li>
                            <a href={'#'}>Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

// function printPages(array){
//     array.forEach(function(element) {
//         return ('hello')
//         // console.log(element.pageName);
//     });
// };

export default Nav;