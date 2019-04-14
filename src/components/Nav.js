import React, { Component } from 'react';
import '../css/Nav.css';

const navList = [
    {pageWay: '#', pageName: 'Homepage'},
    {pageWay: '#', pageName: 'About Us'},
    {pageWay: '#', pageName: 'For Rent'},
    {pageWay: '#', pageName: 'For Sale'},
    {pageWay: '#', pageName: 'Our Agents'},
    {pageWay: '#', pageName: 'Contact Us'}
];

class Nav extends Component{ 
    render() {
        const list = navList.map(element => 
            <li key={element.pageName}>
                <a href={element.pageWay}>{element.pageName}</a>
            </li>
        );
        return (
            <div>
                <nav>
                    <ul className='menu'>
                        {list}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;