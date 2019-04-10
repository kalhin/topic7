import React, { Component } from 'react';
import './Nav.css';

const navList = [
    {pageWay: '#', pageName: 'Homepage'},
    {pageWay: '#', pageName: 'About Us'},
    {pageWay: '#', pageName: 'For Rent'},
    {pageWay: '#', pageName: 'For Sale'},
    {pageWay: '#', pageName: 'Our Agents'},
    {pageWay: '#', pageName: 'Contact Us'}
];

class Nav extends Component{ 
    render(){
        return (
            <div>
                <nav>
                    <PrintNavList/>
                </nav>
            </div>
        );
    }
}

function PrintNavList(){
    const navListList = navList.map(element => 
            <li key={element.pageName}><a href={element.pageWay}>{element.pageName}</a></li>
        );
    return (
        <ul className='menu'>
            {navListList}
        </ul>
    );
};

export default Nav;